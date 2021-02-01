import React from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from '../Typography'
import Button from '../Button/Button'
import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import media from '../../global/mediaQueries'
import Container from '../helpers/Container'

const Wrapper = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    background: ${({ theme }) => theme.colors.dark};
    content: '';
    z-index: -1;
  }
`

const StyledContainer = styled(Container)`
  padding: 6.4rem 2.4rem;
  display: grid;
  place-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: -24rem center;
  border-radius: 1.5rem;

  @media (${media.md}) {
    background-position: -2rem center;
  }

  @media (${media.lg}) {
    padding: 7.2rem 9.5rem;
    grid-template-columns: 1fr auto;
    place-items: center start;
    background-position: right center;
    text-align: left;
  }
`

const Content = styled.div`
  display: grid;
  justify-items: center;

  @media (${media.lg}) {
    justify-items: start;
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0;
  max-width: 20rem;

  @media (${media.md}) {
    line-height: 4rem;
    max-width: 27.5rem;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3.2rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 45rem;

  @media (${media.lg}) {
    margin: 0;
  }
`

export const PureCallToAction = ({ background }) => {
  return (
    <Wrapper>
      <StyledContainer background={background}>
        <Content>
          <StyledHeading h2 as="h2">
            Let’s talk about your project
          </StyledHeading>
          <StyledParagraph>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </StyledParagraph>
        </Content>
        <Button as={Link} to="/contact">Get in touch</Button>
      </StyledContainer>
    </Wrapper>
  )
}

const CallToAction = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        relativePath: { eq: "shared/desktop/bg-pattern-call-to-action.svg" }
      ) {
        publicURL
      }
    }
  `)

  return <PureCallToAction {...props} background={data.file.publicURL} />
}

PureCallToAction.propTypes = {
  background: PropTypes.string.isRequired,
}

export default CallToAction
