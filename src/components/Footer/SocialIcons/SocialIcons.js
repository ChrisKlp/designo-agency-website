import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Wrapper = styled.ul`
  display: flex;
  gap: 1.6rem;
`

const Icon = styled(SVG)`
  path {
    transition: fill 0.2s;
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

export const PureSocialIcons = ({ icons, className }) => {
  const iconList = icons.map(({ id, src, name }) => (
    <li key={id}>
      <Link to="#" aria-label={name}>
        <Icon src={src} />
      </Link>
    </li>
  ))

  return (
    <Wrapper className={className}>{iconList}</Wrapper>
  )
}

const SocialIcons = props => {
  const data = useStaticQuery(graphql`
    {
      facebook: file(relativePath: { eq: "shared/desktop/icon-facebook.svg" }) {
        id
        name
        src: publicURL
      }
      youtube: file(relativePath: { eq: "shared/desktop/icon-youtube.svg" }) {
        id
        name
        src: publicURL
      }
      twitter: file(relativePath: { eq: "shared/desktop/icon-twitter.svg" }) {
        id
        name
        src: publicURL
      }
      pinterest: file(
        relativePath: { eq: "shared/desktop/icon-pinterest.svg" }
      ) {
        id
        name
        src: publicURL
      }
      instagram: file(
        relativePath: { eq: "shared/desktop/icon-instagram.svg" }
      ) {
        id
        name
        src: publicURL
      }
    }
  `)

  const icons = Object.values(data)

  return <PureSocialIcons {...props} icons={icons} />
}

PureSocialIcons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

export default SocialIcons
