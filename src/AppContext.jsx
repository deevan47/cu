import { createContext, useContext } from 'react';

// Shared UI state: narrow flag, selected tabs that persist between pages, and the order sheet.
export const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);
