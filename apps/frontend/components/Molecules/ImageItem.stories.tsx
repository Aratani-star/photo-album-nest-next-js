import type { Meta, StoryObj } from '@storybook/react'

import ImageItem from './ImageItem'

const meta = {
  component: ImageItem,
} satisfies Meta<typeof ImageItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKzW5S1aNK4cc7pC39ry6Pa5Q7FxWJs99h_6JPcPoCs2_F7UB8=s96-c-rg-br100',
    onDelete: () => {},
  },
}
