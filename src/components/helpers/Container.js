import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import media from '../../global/mediaQueries'

const Wrapper = styled.div`
  max-width: 111rem;
  width: 87.2%;
  margin: 0 auto;
  @media (${media.md}) {
    width: 90%;
  }
`

const Container = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

export default Container

Container.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  children: PropTypes.node.isRequired,
}
