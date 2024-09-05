import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
}
