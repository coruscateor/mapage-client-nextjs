import { AppState } from './app_state';

import { createContext } from 'react';

export const AppStateContext = createContext<AppState>(new AppState());



