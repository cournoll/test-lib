import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TypescriptComponent, StyledProps } from './index';

export default {
  title: 'TypescriptComponent',
  component: TypescriptComponent,
} as Meta;

const Template: Story<StyledProps> = (args) => (
  <TypescriptComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  highlight: true,
  text: 'Ceci est un text',
};
