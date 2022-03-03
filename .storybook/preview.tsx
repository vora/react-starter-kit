import { MemoryRouter } from 'react-router-dom';

export const decorators = [
  // Routing Provider
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
