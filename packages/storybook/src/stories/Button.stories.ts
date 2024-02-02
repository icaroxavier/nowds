import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@nowds/react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'React/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'The variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}
