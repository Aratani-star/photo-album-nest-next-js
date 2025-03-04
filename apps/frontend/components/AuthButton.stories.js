import React from 'react';
import { Button } from './AuthButton';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me!',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  style: { backgroundColor: 'blue', color: 'white' },
};