import type { Meta, StoryObj } from '@storybook/react'

import { LeftNav, LeftNavProps } from '@nowds/react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'React/LeftNav',
  component: LeftNav,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<LeftNavProps>

export default meta
type Story = StoryObj<LeftNavProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    menuItems: [
      {
        icon: '../../assets/images/Left Navigation/apps.svg',
        label: 'Apps',
      },
      {
        icon: '../../assets/images/Left Navigation/Home.png',
        label: 'Home',
      },
      {
        icon: '../../assets/images/Left Navigation/Docs.svg',
        label: 'Docs',
      },
      {
        icon: '../../assets/images/Left Navigation/Entities.svg',
        label: 'Entities',
      },
      {
        icon: '../../assets/images/Left Navigation/nowspace.svg',
        label: 'nowspace',
      },
      {
        icon: '../../assets/images/Left Navigation/Submit.svg',
        label: 'Submit',
      },
      {
        icon: '../../assets/images/Left Navigation/Templates.svg',
        label: 'Templates',
      },
    ],
  },
}
