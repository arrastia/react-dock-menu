import React, { useMemo } from 'react';

import { useVelocity } from 'framer-motion';

import { MouseContext } from 'contexts/MouseContext';

import { useMousePosition } from 'hooks/useMousePosition';

import type { ReactNode } from 'react';

export const MouseProvider = ({ children }: { children: ReactNode }) => {
  const { x, y } = useMousePosition();

  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(() => ({ position: { x, y }, velocity: { x: velocityX, y: velocityY } }), [x, y, velocityX, velocityY]);

  return <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>;
};
