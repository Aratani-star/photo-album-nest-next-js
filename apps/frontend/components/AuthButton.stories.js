import React from 'react';
import { AuthButton } from './AuthButton';

export default {
  title: 'Example/AuthButton',
  component: AuthButton,
};

const Template = (args) => <AuthButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me!',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  style: { backgroundColor: 'blue', color: 'white' },
};