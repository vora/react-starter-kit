import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HomeText } from '~/pages/Home/components/HomeText';

export default {
  title: `HomeText`,
  component: HomeText,
  argTypes: {},
} as ComponentMeta<typeof HomeText>;

const Template: ComponentStory<typeof HomeText> = (args) => (
  <HomeText {...args} />
);

export const HomeTextComponent = Template.bind({});
