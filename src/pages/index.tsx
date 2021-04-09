import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { Home } from './Home';

export const Pages = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};
