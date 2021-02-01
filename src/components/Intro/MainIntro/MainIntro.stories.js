import React from 'react'
import { PureMainIntro as MainIntro } from './MainIntro'
import background from '../../../assets/home/desktop/bg-pattern-hero-home.svg'
import image from '../../../assets/home/desktop/image-hero-phone.png'

export default {
  title: 'Intro/MainIntro',
  component: MainIntro,
  args: {
    background: background,
    image: {
      src: image,
      width: 624,
      height: 913,
    },
    heading: 'Award-winning custom designs and digital branding solutions',
    text: `With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.`,
    linkLabel: 'Learn More',
  },
}

const Template = args => <MainIntro {...args} />

export const Primary = Template.bind({})
