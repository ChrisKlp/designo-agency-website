import React from 'react'
import { PureIllustrationCard as IllustrationCard } from './IllustrationCard'
import image from '../../../assets/shared/desktop/illustration-australia.svg'
import background from '../../../assets/shared/desktop/bg-pattern-small-circle.svg'

export default {
  title: 'Location/Illustration Card',
  component: IllustrationCard,
  args: {
    image: image,
    background: background,
    title: 'Australia',
  },
}

const Template = args => <IllustrationCard {...args} />

export const Primary = Template.bind({})
