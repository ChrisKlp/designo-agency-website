import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Heading, Paragraph } from '../../Typography'
import PropTypes from 'prop-types'
import media from '../../../global/mediaQueries'

const WrapperLink = styled(Link)`
  display: grid;
  border-radius: 1.5rem;
  overflow: hidden;

  @media (${media.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${media.lg}) {
    grid-template-columns: 1fr;
    max-width: 35rem;
  }
`

const ImageWrapper = styled.div`
  height: 32rem;
  width: 100%;

  @media (${media.md}) {
    height: 31rem;
  }

  @media (${media.lg}) {
    height: 32rem;
  }
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const StyledHeading = styled(Heading)`
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s;
`

const StyledParagraph = styled(Paragraph)`
  transition: color 0.2s;
`

const Content = styled.div`
  display: grid;
  place-content: center;
  padding: 3.2rem 2.9rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightPink};
  transition: background 0.2s;

  ${WrapperLink}:hover & {
    background: ${({ theme }) => theme.colors.primary};

    ${StyledHeading}, ${StyledParagraph} {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

const ProjectCard = ({ image, title, content }) => {
  return (
    <WrapperLink to="#">
      <ImageWrapper>
        <Image fluid={image} />
      </ImageWrapper>
      <Content>
        <StyledHeading h3 as="h3">
          {title}
        </StyledHeading>
        <StyledParagraph>{content}</StyledParagraph>
      </Content>
    </WrapperLink>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

ProjectCard.defaultProps = {
  img: null,
}

export default ProjectCard
