import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { Home } from './Home';

export const Pages: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
