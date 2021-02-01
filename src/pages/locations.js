import React from 'react'
import Container from '../components/helpers/Container'
import styled from 'styled-components'
import media from '../global/mediaQueries'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import CallToAction from '../components/CallToAction/CallToAction'
import { LocationCard } from '../components/Location'

const Wrapper = styled(Container)`
  display: grid;
  gap: 4rem;
  margin-bottom: 12rem;
  width: 100%;

  @media (${media.md}) {
    width: 90%;
    gap: 12rem;
  }

  @media (${media.lg}) {
    margin-bottom: 16rem;
    gap: 3.2rem;
  }
`

const LocationsPage = ({ data }) => {
  const locationList = data.allLocationsJson.edges

  return (
    <>
      <Wrapper>
        {locationList.map(({ node }, index) => (
          <LocationCard
            key={node.id}
            location={node.location}
            office={node.office}
            addressLine1={node.addressLine1}
            addressLine2={node.addressLine2}
            phone={node.phone}
            email={node.email}
            position={node.map_position}
            secondary={index === 1 && true}
          />
        ))}
      </Wrapper>
      <CallToAction />
    </>
  )
}

export const query = graphql`
  {
    allLocationsJson {
      edges {
        node {
          id
          location
          office
          addressLine1
          addressLine2
          phone
          email
          map_position
        }
      }
    }
  }
`

LocationsPage.propTypes = {
  data: PropTypes.shape({
    allLocationsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.shape({
            id: PropTypes.string,
            location: PropTypes.string,
            office: PropTypes.string,
            addressLine1: PropTypes.string,
            addressLine2: PropTypes.string,
            phone: PropTypes.string,
            email: PropTypes.string,
            map_position: PropTypes.arrayOf(PropTypes.number),
          })
        )
      ),
    }),
  }),
}

export default LocationsPage
