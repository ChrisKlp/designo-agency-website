import React from 'react'
import styled from 'styled-components'
import { Heading } from '../../Typography'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Button from '../../Button/Button'

const Wrapper = styled.li`
  display: grid;
  place-items: center;
`

const ImageWrapper = styled.div`
  width: 20.2rem;
  height: 20.2rem;
  background: url(${({ background }) => background}) no-repeat center;

  img {
    width: 100%;
  }
`
const StyledHeading = styled(Heading)`
  margin: 4.8rem 0 3.2rem;
  text-align: center;
`

export const PureIllustrationCard = ({ image, background, title }) => {
  return (
    <Wrapper>
      <ImageWrapper background={background}>
        <img src={image} alt={`${title} illustration`} />
      </ImageWrapper>
      <StyledHeading h3 as="h3">
        {title}
      </StyledHeading>
      <Button secondary="true" to="/locations" as={Link}>
        See Location
      </Button>
    </Wrapper>
  )
}

const IllustrationCard = props => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shared/desktop/bg-pattern-small-circle.svg" }) {
        publicURL
      }
    }
  `)

  return <PureIllustrationCard {...props} background={data.file.publicURL} />
}

PureIllustrationCard.propTypes = {
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default IllustrationCard
