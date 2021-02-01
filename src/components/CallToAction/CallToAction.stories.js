import React from 'react'
import { PureCallToAction as CallToAction } from './CallToAction'
import background from '../../assets/shared/desktop/bg-pattern-call-to-action.svg'

export default {
  title: 'Call To Action/CallToAction',
  component: CallToAction,
  argTypes: {},
}

const Template = args => <CallToAction {...args} />

export const Primary = Template.bind({})
Primary.args = {
  background: background,
}
