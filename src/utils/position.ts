import type { Position } from '../types/Dock.types';

export function isSideDock(position: Position) {
  return position === 'left' || position === 'right';
}
