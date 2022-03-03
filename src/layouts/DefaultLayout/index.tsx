import React from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
