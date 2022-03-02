import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './Home';

import { DefaultLayout } from '~/layouts/DefaultLayout';
import { RoutePaths } from '~/lib/constants';

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
