import React from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from '../../Typography'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import media from '../../../global/mediaQueries'

const Wrapper = styled.div`
  padding: 0 2.4rem;
  display: grid;
  place-content: center;
  text-align: center;
  height: 32rem;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${({ background }) => background[0]});
  background-repeat: no-repeat;
  background-position: top right;

  @media (${media.md}) {
    height: 25.2rem;
    background-image: url(${({ background }) => background[1]});
    background-position: -2.1rem center;
    border-radius: 1.5rem;
  }

  @media (${media.lg}) {
    background-position: right center;
    background-image: url(${({ background }) => background[2]});
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 38.5rem;

  @media (${media.lg}) {
    margin: 0;
  }
`

export const PurePageIntro = ({
  mobileBg,
  tabletBg,
  desktopBg,
  heading,
  text,
}) => {
  const background = [mobileBg, tabletBg, desktopBg]
  return (
    <Wrapper background={background}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledParagraph small>{text}</StyledParagraph>
    </Wrapper>
  )
}

const PageIntro = props => {
  const data = useStaticQuery(graphql`
    {
      mobileBg: file(
        relativePath: {
          eq: "shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
        }
      ) {
        publicURL
      }
      tabletBg: file(
        relativePath: {
          eq: "shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
        }
      ) {
        publicURL
      }
      desktopBg: allFile(filter: { name: { regex: "/bg-pattern-intro/" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)
  const category = props.heading.toLowerCase().split(' ').shift()
  const [desktopBg] = data.desktopBg.nodes.filter(item =>
    item.name.split('-').includes(category)
  )

  return (
    <PurePageIntro
      {...props}
      mobileBg={data.mobileBg.publicURL}
      tabletBg={data.tabletBg.publicURL}
      desktopBg={desktopBg.publicURL}
    />
  )
}

PurePageIntro.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  mobileBg: PropTypes.string.isRequired,
  tabletBg: PropTypes.string.isRequired,
  desktopBg: PropTypes.string.isRequired,
}

PageIntro.propTypes = {
  heading: PropTypes.string.isRequired,
}

PurePageIntro.defaultProps = {
  heading: 'Heading',
  text: 'Page heading text',
}

export default PageIntro
