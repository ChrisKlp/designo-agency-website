import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import media from '../../global/mediaQueries'
import { graphql, useStaticQuery } from 'gatsby'
import Feature from './Feature/Feature'

const Wrapper = styled.ul`
  display: grid;
  gap: 8rem;
  place-items: start center;

  @media (${media.md}) {
    gap: 3.2rem;
  }

  @media (${media.lg}) {
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
`
export const Features = ({ className }) => {
  const query = useStaticQuery(graphql`
    {
      allFeaturesJson {
        edges {
          node {
            id
            title
            content
            image {
              publicURL
            }
          }
        }
      }
      background: file(
        relativePath: { eq: "shared/desktop/bg-pattern-small-circle.svg" }
      ) {
        publicURL
      }
    }
  `)
  const data = query.allFeaturesJson.edges
  const background = query.background.publicURL

  return (
    <Wrapper className={className}>
      {data.map(({ node }) => (
        <Feature key={node.id} {...node} background={background} />
      ))}
    </Wrapper>
  )
}

Features.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

export default Features
