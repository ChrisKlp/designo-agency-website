import React from 'react'
import { PureCategoryCard as CategoryCard } from './CategoryCard'
import styled from 'styled-components'
import icon from '../../../assets/shared/desktop/icon-right-arrow.svg'
import imageM from '../../../assets/home/mobile/image-app-design.jpg'
import imageT from '../../../assets/home/tablet/image-app-design.jpg'
import imageD from '../../../assets/home/desktop/image-app-design.jpg'

const DoubleHeightWrapper = styled.div`
  height: 50rem;
`

export default {
  title: 'Portfolio/Category Card',
  component: CategoryCard,
  args: {
    title: 'Web Design',
    icon: icon,
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
    to: '/',
  },
}

const Template = args => <CategoryCard {...args} />

export const Primary = Template.bind({})

export const DoubleHeight = Template.bind({})
DoubleHeight.decorators = [
  Story => (
    <DoubleHeightWrapper>
      <Story />
    </DoubleHeightWrapper>
  ),
]
