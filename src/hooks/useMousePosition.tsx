import { useMemo } from 'react';

import { useMotionValue } from 'framer-motion';

import { useEventListener } from 'hooks/useEventListener';

export const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMouseMove = ({ clientX, clientY }: any) => {
    x.set(clientX);
    y.set(clientY);
  };

  useEventListener({ event: 'mousemove', handler: onMouseMove });

  return useMemo(() => ({ x, y }), [x, y]);
};
