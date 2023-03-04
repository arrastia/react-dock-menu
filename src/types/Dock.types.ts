import type { MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

export type Position = 'left' | 'right' | 'top' | 'bottom';

export interface DockMouse {
  position: { x: MotionValue<number>; y: MotionValue<number> };
  velocity: { x: MotionValue<number>; y: MotionValue<number> };
}

export interface DockItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export interface DockProps {
  children: ReactNode;
  magnification?: number;
  position?: Position;
  size?: number;
}

export interface DockState {
  dockPosition: Position;
  hovered: boolean;
  magnification: number;
  size: number;
  width: number;
}
