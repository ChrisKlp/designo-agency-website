import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Heading, Paragraph } from '../../Typography'
import media from '../../../global/mediaQueries'
import Map from '../Map/Map'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${media.md}) {
    gap: 2.4rem;
  }

  @media (${media.lg}) {
    flex-direction: row;
    gap: 3rem;
  }
`

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  z-index: 0;

  @media (${media.md}) {
    border-radius: 1.5rem;
    overflow: hidden;
  }

  @media (${media.lg}) {
    width: 35rem;
    height: auto;
    order: ${({ secondary }) => (secondary ? 0 : 1)};
  }
`

const LeafletMap = styled(Map)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
    grid-template:
      'heading heading' auto
      'address1 address2' auto
      / 1fr 1fr;
    gap: 2.4rem 3rem;
    place-items: center start;
    padding: 8.8rem 7.5rem;
    background-position: bottom left;
    border-radius: 1.5rem;
    overflow: hidden;
    text-align: left;
  }

  @media (${media.lg}) {
    flex-grow: 1;
    padding: 8.8rem 9.5rem;
  }
`
const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0;

  @media (${media.md}) {
    grid-area: heading;
  }
`
const Address = styled.address`
  @media (${media.md}) {
    &:first-of-type {
      grid-area: address1;
    }
    &:last-of-type {
      grid-area: address2;
    }
  }
`

export const PureLocationCard = ({
  location,
  office,
  addressLine1,
  addressLine2,
  phone,
  email,
  background,
  secondary,
  position,
}) => {
  return (
    <Wrapper>
      <MapWrapper secondary={secondary}>
        {typeof window !== 'undefined' && <LeafletMap position={position} />}
      </MapWrapper>
      <Content background={background}>
        <StyledHeading>{location}</StyledHeading>
        <Address>
          <Paragraph bold>{office}</Paragraph>
          <Paragraph>{addressLine1}</Paragraph>
          <Paragraph>{addressLine2}</Paragraph>
        </Address>
        <Address>
          <Paragraph bold>Contact</Paragraph>
          <Paragraph>P: {phone}</Paragraph>
          <Paragraph>M: {email}</Paragraph>
        </Address>
      </Content>
    </Wrapper>
  )
}

const LocationCard = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        relativePath: { eq: "shared/desktop/bg-pattern-three-circles.svg" }
      ) {
        publicURL
      }
    }
  `)
  const background = data.file.publicURL

  return <PureLocationCard {...props} background={background} />
}

PureLocationCard.propTypes = {
  location: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  background: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
}

PureLocationCard.defaultTypes = {
  secondary: false,
}

export default LocationCard
