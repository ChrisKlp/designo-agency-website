import React from 'react'
import { PureArticleBox as ArticleBox } from './ArticleBox'
import background from '../../assets/shared/desktop/bg-pattern-three-circles.svg'
import imageM from '../../assets/about/mobile/image-world-class-talent.jpg'
import imageT from '../../assets/about/tablet/image-world-class-talent.jpg'
import imageD from '../../assets/about/desktop/image-world-class-talent.jpg'
import bgIntroM from '../../assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import bgIntroD from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg'

export default {
  title: 'Content/Article Box',
  component: ArticleBox,
  args: {
    title: 'World-class talent',
    content: `We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. 
    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`,
    background: background,
    images: [
      {
        childImageSharp: {
          fluid: {
            src: imageM,
          },
        },
      },
      {
        childImageSharp: {
          fluid: {
            src: imageT,
          },
        },
      },
      {
        childImageSharp: {
          fluid: {
            src: imageD,
          },
        },
      },
    ],
  },
}

const Template = args => <ArticleBox {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
}

export const Intro = Template.bind({})
Intro.args = {
  intro: true,
  bgIntro: [bgIntroM, bgIntroD],
  secondary: true,
}
