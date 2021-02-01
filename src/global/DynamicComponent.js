import React from "react"
import styled from "styled-components"
import { typography, color, system } from "styled-system"
import PropTypes from "prop-types"

const StyledDynamicComponent = styled.p`
  ${typography}
  ${color}
  ${system({ textTransform: true })}
`

const DynamicComponent = ({ tag, children, ...props }) => {
  const NewComponent = StyledDynamicComponent.withComponent(tag)
  return <NewComponent {...props}>{children}</NewComponent>
}

DynamicComponent.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

DynamicComponent.defaultProps = {
  tag: "p",
}

export default DynamicComponent
