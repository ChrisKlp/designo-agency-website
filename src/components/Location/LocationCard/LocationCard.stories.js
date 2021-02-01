import React from 'react'
import { PureLocationCard as LocationCard } from './LocationCard'
import background from '../../../assets/shared/desktop/bg-pattern-three-circles.svg'

export default {
  title: 'Location/Location Card',
  component: LocationCard,
  args: {
    background: background,
    location: 'Australia',
    office: 'Designo AU Office',
    addressLine1: '19 Balonne Street',
    addressLine2: 'New South Wales 2443',
    phone: '(02) 6720 9092',
    email: 'contact@designo.au',
  },
}

const Template = args => <LocationCard {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
}
