import React from 'react'
import { PureSocialIcons as SocialIcons } from './SocialIcons'
import iconFacebook from '../../../assets/shared/desktop/icon-facebook.svg'
import iconInstagram from '../../../assets/shared/desktop/icon-instagram.svg'
import iconPinterest from '../../../assets/shared/desktop/icon-pinterest.svg'
import iconTwitter from '../../../assets/shared/desktop/icon-twitter.svg'
import iconYoutube from '../../../assets/shared/desktop/icon-youtube.svg'

export default {
  title: 'Footer/SocialIcons',
  component: SocialIcons,
  args: {
    icons: [
      {
        id: 1,
        src: iconFacebook,
      },
      {
        id: 2,
        src: iconYoutube,
      },
      {
        id: 3,
        src: iconTwitter,
      },
      {
        id: 4,
        src: iconPinterest,
      },
      {
        id: 5,
        src: iconInstagram,
      },
    ],
  },
}

const Template = args => <SocialIcons {...args} />

export const Primary = Template.bind({})
