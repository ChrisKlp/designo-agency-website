import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Heading } from '../../Typography'
import media from '../../../global/mediaQueries'
import useFluidImage from '../../../hooks/useFluidImage'

const WrapperLink = styled(Link)`
  position: relative;
  display: grid;
  place-content: center;
  min-height: 25rem;
  height: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  z-index: 0;

  @media (${media.md}) {
    min-height: 20rem;
  }

  @media (${media.lg}) {
    min-height: 30.8rem;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: hsl(0, 0%, 0%);
    opacity: 0.5;
    content: '';
    transition: background 0.2s, opacity 0.2s;
  }

  ${WrapperLink}:hover &::after {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }
`
const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const InnerWrapper = styled.div`
  display: grid;
  gap: 1.2rem;
  height: 100%;
`

const StyledHeading = styled(Heading)`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`

const ProjectsLink = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    display: block;
  }
`

export const PureCategoryCard = ({ title, to, images, imageXL, icon }) => {
  const fluidImage = useFluidImage(images, imageXL)

  return (
    <WrapperLink to={to}>
      <ImageWrapper>
        <Image fluid={fluidImage} />
      </ImageWrapper>
      <InnerWrapper>
        <StyledHeading h2 as="h2">
          {title}
        </StyledHeading>
        <ProjectsLink>
          <p>View Projects</p>
          <img src={icon} alt="Right Arror Icon" />
        </ProjectsLink>
      </InnerWrapper>
    </WrapperLink>
  )
}

const CategoryCard = props => {
  const data = useStaticQuery(graphql`
    {
      file(name: { regex: "/icon-right-arrow/" }) {
        publicURL
      }
    }
  `)

  return <PureCategoryCard {...props} icon={data.file.publicURL} />
}

PureCategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        fluid: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
      })
    )
  ),
  imageXL: PropTypes.objectOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
      }),
    })
  ),
  icon: PropTypes.string.isRequired,
}

export default CategoryCard
