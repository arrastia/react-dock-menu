import { createContext } from 'react';

import type { DockMouse } from '../../types/Dock.types';

export const MouseContext = createContext<DockMouse>({} as DockMouse);
