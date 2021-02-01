import React from 'react'
import { PurePageIntro as PageIntro } from './PageIntro'
import mobileBg from '../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg'
import tabletBg from '../../../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg'
import WebDesktopBg from '../../../assets/web-design/desktop/bg-pattern-intro-web.svg'
import GraphicDesktopBg from '../../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import AppDesktopBg from '../../../assets/app-design/desktop/bg-pattern-intro-app.svg'

export default {
  title: 'Intro/PageIntro',
  component: PageIntro,
  args: {
    mobileBg: mobileBg,
    tabletBg: tabletBg,
  },
}

const Template = args => <PageIntro {...args} />

export const WebDesign = Template.bind({})
WebDesign.args = {
  desktopBg: WebDesktopBg,
  heading: 'Web Design',
  text:
    'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
}

export const AppDesign = Template.bind({})
AppDesign.args = {
  desktopBg: AppDesktopBg,
  heading: 'App Design',
  text: `Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.`,
}

export const GraphicDesign = Template.bind({})
GraphicDesign.args = {
  desktopBg: GraphicDesktopBg,
  heading: 'Graphic Design',
  text:
    'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
}
