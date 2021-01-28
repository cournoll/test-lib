import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TypescriptComponent, TypescriptComponentProps } from './index';

export default {
  title: 'TypescriptComponent',
  component: TypescriptComponent,
  args: {
    highlight: true,
    text: 'Ceci est un text',
  }
} as Meta;

export const Default: Story<TypescriptComponentProps> = (args) => (
  <TypescriptComponent {...args} />
);
