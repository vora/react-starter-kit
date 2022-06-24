import { Story } from '@ladle/react';

import { HomeText } from '~/pages/Home/components/HomeText';

export default {
  title: 'home-text',
};

export const HomeTextComponent: Story<any> = (args) => <HomeText {...args} />;
