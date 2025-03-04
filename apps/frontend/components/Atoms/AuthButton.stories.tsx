import { Meta, StoryObj } from "@storybook/react";
import AuthButton from "./AuthButton";

const meta: Meta<typeof AuthButton> = {
  title: "BUTTON/AuthButton",
  component: AuthButton,
};

export default meta;

type Story = StoryObj<typeof AuthButton>;

export const Primary: Story = {
  args: {
    label: "Hi. Click Me Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Hi. Click Me Secondary",
  },
};