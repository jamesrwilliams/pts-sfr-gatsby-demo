import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Offer from './Offer';
import {Button} from "../../../stories/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Offer Block',
  component: Offer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Offer> = (args) => <Offer {...args} />;

export const Regular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
  primary: true,
  label: 'Button',
};
