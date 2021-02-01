import React from 'react'
import Container from '../components/helpers/Container'
import styled from 'styled-components'
import media from '../global/mediaQueries'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import ContactForm from '../components/Form/ContactForm'
import { IllustrationCardList } from '../components/Location'
import { Heading, Paragraph } from '../components/Typography'

const Wrapper = styled(Container)`
  width: 100%;

  @media (${media.md}) {
    width: 90%;
  }
`

const Intro = styled.div`
  padding: 7.2rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${({ mobileBg }) => mobileBg});
  background-repeat: no-repeat;
  background-position: -9.2rem top;

  @media (${media.md}) {
    padding: 7.1rem 5.8rem;
    background-image: url(${({ tabletBg }) => tabletBg});
    background-position: -12.1rem -8.3rem;
    border-radius: 1.5rem;
  }

  @media (${media.lg}) {
    padding: 0 9.5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 38rem;
    gap: 9.5rem;
    height: 48rem;
    background-position: bottom left;
  }
`

const Content = styled.div`
  margin-bottom: 3.6rem;
  text-align: center;

  & ${Heading} {
    margin-bottom: 2.4rem;
  }

  & ${Heading}, & ${Paragraph} {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (${media.md}) {
    margin-bottom: 2.8rem;
    text-align: left;

    & ${Heading} {
      margin-bottom: 3.2rem;
    }
  }
`

const LocationsPage = ({ data }) => {
  return (
    <Wrapper>
      <Intro mobileBg={data.mobile.publicURL} tabletBg={data.tablet.publicURL}>
        <Content>
          <Heading>Contact Us</Heading>
          <Paragraph small={true}>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </Paragraph>
        </Content>
        <ContactForm />
      </Intro>
      <IllustrationCardList />
    </Wrapper>
  )
}

export const query = graphql`
  {
    mobile: file(name: { regex: "/bg-pattern-hero-contact-mobile/" }) {
      publicURL
    }
    tablet: file(name: { regex: "/bg-pattern-hero-desktop/" }) {
      publicURL
    }
  }
`

LocationsPage.propTypes = {
  data: PropTypes.shape({
    mobile: PropTypes.shape({
      publicURL: PropTypes.string,
    }),
    tablet: PropTypes.shape({
      publicURL: PropTypes.string,
    }),
  }),
}

export default LocationsPage
