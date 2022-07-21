import { Story } from '@ladle/react';

import { HomeText, HomeTextProps } from '~/pages/Home/components/HomeText';

export default {
  title: 'home-text',
};

export const HomeTextComponent: Story<HomeTextProps> = (args) => (
  <HomeText {...args} />
);

HomeTextComponent.args = {
  welcomeText: 'Welcome Home!',
};
