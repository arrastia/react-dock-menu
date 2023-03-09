import type { HTMLMotionProps, MotionValue } from 'framer-motion';
import type { HtmlHTMLAttributes, ReactNode } from 'react';

export type Position = 'left' | 'right' | 'top' | 'bottom';

export interface DockMouse {
  position: { x: MotionValue<number>; y: MotionValue<number> };
  velocity: { x: MotionValue<number>; y: MotionValue<number> };
}

export interface DockItemProps extends HTMLMotionProps<'li'> {
  children: ReactNode;
  onClick?: () => void;
}

export interface DockProps extends HtmlHTMLAttributes<HTMLUListElement> {
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
