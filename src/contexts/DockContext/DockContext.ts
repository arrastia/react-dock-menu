import { createContext } from 'react';

import type { DockState } from 'types/Dock.types';

export const DockContext = createContext<DockState>({ dockPosition: 'bottom', hovered: false, magnification: 35, size: 50, width: 0 });
