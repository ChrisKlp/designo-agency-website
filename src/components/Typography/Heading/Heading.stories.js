import React from 'react'
import Heading from './Heading'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

const Template = args => <Heading {...args} />

export const H1 = Template.bind({})

export const H2 = Template.bind({})
H2.args = {
  h2: true,
  as: 'h2',
}

export const H3 = Template.bind({})
H3.args = {
  h3: true,
  as: 'h3',
}
