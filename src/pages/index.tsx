import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';

import { DefaultLayout } from '~/layouts/DefaultLayout';
import { RoutePaths } from '~/lib/constants';

export const Pages = () => {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
