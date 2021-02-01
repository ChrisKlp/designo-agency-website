import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import IllustrationCard from '../IllustrationCard/IllustrationCard'
import media from '../../../global/mediaQueries'

const Wrapper = styled.div`
  padding: 12rem 0;

  @media (${media.lg}) {
    padding: 16rem 0;
  }
`

const LocationList = styled.ul`
  display: grid;
  gap: 4.8rem;

  @media (${media.md}) {
    gap: 8rem;
  }

  @media (${media.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`

const IllustrationCardList = ({ className }) => {
  const query = useStaticQuery(graphql`
    {
      allLocationsJson {
        nodes {
          id
          location
          illustration {
            publicURL
          }
        }
      }
    }
  `)

  const data = query.allLocationsJson.nodes

  return (
    <Wrapper className={className}>
      <LocationList>
        {data.map(({ id, location, illustration }) => (
          <IllustrationCard key={id} title={location} image={illustration.publicURL} />
        ))}
      </LocationList>
    </Wrapper>
  )
}

IllustrationCardList.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
}

export default IllustrationCardList
