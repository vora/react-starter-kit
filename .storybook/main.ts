const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: false,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          '~': path.resolve(process.cwd(), 'src'),
        },
      },
    };
  },
};
