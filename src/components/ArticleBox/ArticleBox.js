import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Paragraph } from '../Typography'
import media from '../../global/mediaQueries'
import useFluidImage from '../../hooks/useFluidImage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.md}) {
    border-radius: 1.5rem;
    overflow: hidden;
  }

  @media (${media.lg}) {
    flex-direction: row;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 32rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (${media.md}) {
  }

  @media (${media.lg}) {
    flex-shrink: 0;
    width: 47.6rem;
    height: auto;
    order: ${({ secondary }) => (secondary ? 1 : 0)};
  }
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0;

  @media (${media.md}) {
  }
`

const Content = styled.div`
  display: grid;
  gap: 2.4rem;
  place-items: center;
  padding: 8rem 2.4rem;
  min-height: 32.6rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightPink};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: top left;

  @media (${media.md}) {
    padding: 6.8rem 5.8rem;
    background-position: calc(100% - 1.1rem) calc(100% - 2.2rem);
  }

  @media (${media.lg}) {
    place-items: center start;
    flex-grow: 1;
    padding: 15.4rem 9.6rem 15.4rem 9.4rem;
    background-position: -14.6rem bottom;
    text-align: left;
  }

  ${({ intro }) =>
    intro &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      background-image: url(${({ bgIntro }) => bgIntro[0]});
      background-position: top -14rem right;

      ${StyledHeading}, ${Paragraph} {
        color: ${({ theme }) => theme.colors.white};
      }

      @media (${media.md}) {
        padding: 6.4rem 5.8rem;
        background-image: url(${({ bgIntro }) => bgIntro[1]});
        background-position: -12rem calc(100% - 10rem);
      }

      @media (${media.lg}) {
        padding: 13.5rem 8.2rem 13.5rem 9.6rem;
        background-position: right bottom;
      }
    `};
`

export const PureArticleBox = ({
  title,
  content,
  images,
  background,
  secondary,
  intro,
  bgIntro,
  className,
}) => {
  const fluidImage = useFluidImage(images)

  return (
    <Wrapper className={className}>
      <ImageWrapper secondary={secondary}>
        <Image fluid={fluidImage} />
      </ImageWrapper>
      <Content background={background} intro={intro} bgIntro={bgIntro}>
        {intro ? (
          <StyledHeading>{title}</StyledHeading>
        ) : (
          <StyledHeading as="h2" h2>
            {title}
          </StyledHeading>
        )}
        <Paragraph>{content}</Paragraph>
      </Content>
    </Wrapper>
  )
}

const ArticleBox = props => {
  const data = useStaticQuery(graphql`
    {
      background: file(
        relativePath: { eq: "shared/desktop/bg-pattern-three-circles.svg" }
      ) {
        publicURL
      }
      bgIntroMobile: file(
        relativePath: { eq: "about/mobile/bg-pattern-hero-about-mobile.svg" }
      ) {
        publicURL
      }
      bgIntroDesktop: file(
        relativePath: { eq: "about/desktop/bg-pattern-hero-about-desktop.svg" }
      ) {
        publicURL
      }
    }
  `)

  return (
    <PureArticleBox
      {...props}
      background={data.background.publicURL}
      bgIntro={[data.bgIntroMobile.publicURL, data.bgIntroDesktop.publicURL]}
    />
  )
}

PureArticleBox.propTypes = {
  intro: PropTypes.bool,
  bgIntro: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        fluid: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
      })
    )
  ),
  background: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

PureArticleBox.defaultTypes = {
  secondary: false,
}

export default ArticleBox
