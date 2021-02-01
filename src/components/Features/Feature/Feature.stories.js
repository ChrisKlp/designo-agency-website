import React from 'react'
import Feature from './Feature'
import image from '../../../assets/home/desktop/illustration-passionate.svg'
import background from '../../../assets/shared/desktop/bg-pattern-small-circle.svg'

export default {
  title: 'Features/Feature',
  component: Feature,
  args: {
    background: background,
  },
}

const Template = args => <Feature {...args} />

export const Primary = Template.bind({})
Primary.args = {
  image: {
    publicURL: image,
  },
  title: 'passionate',
  content:
    'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
}
