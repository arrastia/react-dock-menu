import { useMemo } from 'react';

import { useVelocity } from 'framer-motion';

import { useMousePosition } from './useMousePosition';

export const useMouse = () => {
  const { x, y } = useMousePosition();

  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  return useMemo(() => ({ position: { x, y }, velocity: { x: velocityX, y: velocityY } }), [x, y, velocityX, velocityY]);
};
