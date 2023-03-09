import React, { useEffect, useRef, useState } from 'react';

import styles from './Dock.module.css';

import { DockContext } from 'contexts/DockContext';

import { MouseProvider } from 'providers/MouseProvider';

import { isSideDock } from 'utils/position';

import type { DockProps } from 'types/Dock.types';

export const Dock = ({ children, className, magnification = 35, position = 'bottom', size = 50, ...rest }: DockProps) => {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setWidth(ref.current?.[isSideDock(position) ? 'clientHeight' : 'clientWidth'] || 0);
  }, [position]);

  return (
    <MouseProvider>
      <DockContext.Provider value={{ dockPosition: position, hovered, magnification, size, width }}>
        <ul
          className={`${styles.stack} ${styles[position]} ${className}`}
          onMouseOut={() => setHovered(false)}
          onMouseOver={() => setHovered(true)}
          ref={ref}
          {...rest}>
          {children}
        </ul>
      </DockContext.Provider>
    </MouseProvider>
  );
};
