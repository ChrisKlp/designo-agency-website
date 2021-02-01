import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Heading, Paragraph } from '../../Typography'
import Button from '../../Button/Button'
import Img from 'gatsby-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import media from '../../../global/mediaQueries'
import Container from '../../helpers/Container'

const Wrapper = styled(Container)`
  position: relative;
  padding: 8rem 2.4rem 0;
  width: 100%;
  display: grid;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: left 10.2rem;
  overflow: hidden;
  z-index: 0;

  @media (${media.md}) {
    width: 90%;
    padding: 6rem 0 0;
    background-position: 17rem 10.5rem;
    border-radius: 1.5rem;
  }

  @media (${media.lg}) {
    padding: 0 9.5rem;
    height: 64rem;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`

const Content = styled.div`
  margin-bottom: 8rem;
  display: grid;
  justify-items: center;
  text-align: center;
  z-index: 1;

  @media (${media.md}) {
    margin-bottom: 6.9rem;
  }

  @media (${media.lg}) {
    text-align: left;
    justify-items: start;
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 49rem;

  @media (${media.md}) {
    margin-bottom: 2.9rem;
  }

  @media (${media.ld}) {
    margin-bottom: 3.2rem;
  }
`

const Text = styled(Paragraph)`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 44.5rem;

  @media (${media.md}) {
    margin-bottom: 1.9rem;
  }

  @media (${media.lg}) {
    margin-bottom: 4rem;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 28.4rem;
  height: 38.7rem;
  z-index: -1;

  @media (${media.lg}) {
    justify-self: end;
  }
`

const Image = styled(Img)`
  top: -17.1rem;
  left: 50%;
  transform: translateX(-50%);
`

export const PureMainIntro = ({ image, background, className }) => {
  return (
    <Wrapper background={background} className={className}>
      <Content>
        <StyledHeading>
          Award-winning custom designs and digital branding solutions
        </StyledHeading>
        <Text small>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Text>
        <Button as={Link} to="#">
          Learn More
        </Button>
      </Content>
      <ImageWrapper>
        <Image fixed={image} />
      </ImageWrapper>
    </Wrapper>
  )
}

const MainIntro = props => {
  const data = useStaticQuery(graphql`
    {
      background: file(
        relativePath: { eq: "home/desktop/bg-pattern-hero-home.svg" }
      ) {
        publicURL
      }
      image: file(relativePath: { eq: "home/desktop/image-hero-phone.png" }) {
        childImageSharp {
          fixed(width: 624) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <PureMainIntro
      {...props}
      background={data.background.publicURL}
      image={data.image.childImageSharp.fixed}
    />
  )
}

PureMainIntro.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  background: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

export default MainIntro
