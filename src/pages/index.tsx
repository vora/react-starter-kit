import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { RoutePaths } from '../lib/constants';

import { Home } from './Home';

export const Pages = () => {
  return (
    <Switch>
      <Route
        exact
        path={RoutePaths.HOME}
        render={() => (
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};
