import React from 'react'
import Paragraph from './Paragraph'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

const Template = args => <Paragraph {...args} />

export const Normal = Template.bind({})
export const Bold = Template.bind({})
Bold.args = {
  bold: true,
}
