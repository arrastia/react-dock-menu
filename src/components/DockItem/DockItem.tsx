import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { motion, useSpring, useTransform } from 'framer-motion';

import styles from './DockItem.module.css';

import { DockContext } from 'contexts/DockContext';
import { MouseContext } from 'contexts/MouseContext';

import { useEventListener } from 'hooks/useEventListener';

import { isSideDock } from 'utils/position';
import { isTouchDevice } from 'utils/device';

import type { DockItemProps } from '../../types/Dock.types';

export const DockItem = ({ children, onClick, ...rest }: DockItemProps) => {
  const { dockPosition, hovered, magnification, size, width } = useContext(DockContext);
  const { position } = useContext(MouseContext);

  const [center, setCenter] = useState<number>(0);

  const ref = useRef<HTMLLIElement>(null);

  const dimension = useTransform(
    position[isSideDock(dockPosition) ? 'y' : 'x'],
    (mouseX: number) => size + magnification * Math.cos((((mouseX - center) / width) * Math.PI) / 2) ** 12
  );
  const spring = useSpring(size, { damping: 10, mass: 0.01, stiffness: 150 });

  const handleDimensionChange = useCallback((value: number) => (hovered ? spring.set(value) : spring.set(size)), [hovered, size, spring]);

  const handleResize = useCallback(() => {
    const { height, width, x, y } = ref.current?.getBoundingClientRect() || {};

    if (isSideDock(dockPosition)) {
      setCenter((y || 0) + (height || 2) / 2);
    } else {
      setCenter((x || 0) + (width || 2) / 2);
    }
  }, [dockPosition]);

  useEffect(() => {
    const unsubscribe = dimension.on('change', handleDimensionChange);

    return () => {
      unsubscribe();
    };
  }, [handleDimensionChange, dimension, hovered, size, spring]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEventListener({ appendTo: window, event: 'resize', handler: handleResize });

  return (
    <motion.li
      className={`${styles.item} ${styles[dockPosition]}`}
      onClick={onClick}
      ref={ref}
      style={{ height: !isTouchDevice() ? spring : size, minWidth: size, width: !isTouchDevice() ? spring : size }}
      {...rest}>
      {children}
    </motion.li>
  );
};
