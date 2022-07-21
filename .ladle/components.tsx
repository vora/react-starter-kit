import React from 'react';
import type { GlobalProvider } from '@ladle/react';
import { LadleErrorBoundary } from './LadleErrorBoundary';
import { MemoryRouter } from 'react-router-dom';

export const Provider: GlobalProvider = ({ children }) => (
  <React.StrictMode>
    <LadleErrorBoundary>
      <MemoryRouter>{children}</MemoryRouter>
    </LadleErrorBoundary>
  </React.StrictMode>
);
