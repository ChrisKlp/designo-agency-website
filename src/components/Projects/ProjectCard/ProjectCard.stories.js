import React from 'react'
import ProjectCard from './ProjectCard'
import image from '../../../assets/web-design/desktop/image-express.jpg'

export default {
  title: 'Portfolio/Project Card',
  component: ProjectCard,
  args: {
    title: 'express',
    content: 'A multi-carrier shipping website for ecommerce businesses',
    image: {
      src: image,
    },
  },
}

const Template = args => <ProjectCard {...args} />

export const Primary = Template.bind({})
