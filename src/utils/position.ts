import type { Position } from '../types/Dock.types';

export function isSideDock(position: Position): boolean {
  return position === 'left' || position === 'right';
}
