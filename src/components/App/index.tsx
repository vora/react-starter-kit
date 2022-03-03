import { BrowserRouter } from 'react-router-dom';

import { Pages } from '~/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};
