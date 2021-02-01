import React from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from '../../Typography'
import PropTypes from 'prop-types'
import { md, lg } from '../../../global/mediaQueries'

const Wrapper = styled.li`
  display: grid;
  place-items: center;

  @media (min-width: ${md}px) and (max-width: ${lg - 1}px) {
    grid-template-columns: 1fr auto;
    place-items: center start;
    text-align: left;
  }
`

const ImageWrapper = styled.div`
  width: 20.2rem;
  height: 20.2rem;
  background: url(${({ background }) => background}) no-repeat center;

  img {
    width: 100%;
  }
`

const Content = styled.div`
  margin-top: 4.8rem;
  display: grid;
  place-items: center;
  text-align: center;

  @media (min-width: ${md}px) and (max-width: ${lg}px) {
    margin-top: 0;
    margin-left: 4.8rem;
    place-items: center start;
    text-align: left;
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 3.2rem;

  @media (min-width: ${md}px) and (max-width: ${lg}px) {
    margin-bottom: 1.6rem;
  }
`

const Feature = ({ image, background, title, content }) => {
  return (
    <Wrapper>
      <ImageWrapper background={background}>
        <img src={image.publicURL} alt={`${title} illustration`} />
      </ImageWrapper>
      <Content>
        <StyledHeading h3 as="h3">
          {title}
        </StyledHeading>
        <Paragraph>{content}</Paragraph>
      </Content>
    </Wrapper>
  )
}

Feature.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Feature
