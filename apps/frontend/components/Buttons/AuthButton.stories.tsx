import { Meta, StoryObj } from '@storybook/react'
import AuthButton from './AuthButton'

const meta: Meta<typeof AuthButton> = {
  title: 'COMPONENT/AuthButton',
  component: AuthButton,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof AuthButton>

export const Primary: Story = {
  args: {
    label: 'Hi. Click Me Primary',
    backgroundColor: '#0b7aee',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Hi. Click Me Secondary',
    backgroundColor: '#0faa7a',
  },
}

export const Danger: Story = {
  args: {
    label: 'Hi. Click Me Danger',
    backgroundColor: '#ee3a07',
  },
}
