import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.3rem;
  width: 100%;
`

const Label = styled.label`
  position: absolute;
  margin: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip-path: inset(50%);
`

const Field = styled.input`
  padding: 1.1rem 1.6rem 1rem;
  width: 100%;
  height: ${({ as }) => (as === 'textarea' ? '11.2rem' : 'auto')};
  font-family: inherit;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.6rem;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  transition: border 0.2s, box-shadow 0.2s;
  resize: none;

  &::placeholder {
    opacity: 0.5;
    color: inherit;
  }

  &:focus {
    outline: none;
    box-shadow: 0 2px 0 0 white;
  }
`

const Error = styled.div`
  position: absolute;
  bottom: 1.2rem;
  right: 0.8rem;
  display: flex;
  gap: 0.9rem;
  align-items: center;

  span {
    font-style: italic;
    font-size: 1.2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    display: block;
  }
`

export const PureField = ({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  errorMessage,
  errorIcon,
  as,
}) => {
  return (
    <Wrapper className={className}>
      <Label htmlFor={name}>{placeholder}</Label>
      <Field
        as={as}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && (
        <Error>
          <span>{errorMessage}</span>
          <img src={errorIcon} alt="Error Icon" />
        </Error>
      )}
    </Wrapper>
  )
}

const Input = props => {
  const data = useStaticQuery(graphql`
    {
      file(name: { regex: "/icon-error/" }) {
        publicURL
      }
    }
  `)
  const errorIcon = data.file.publicURL
  return <PureField {...props} errorIcon={errorIcon} />
}

PureField.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  as: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorMessage: PropTypes.string,
  errorIcon: PropTypes.string.isRequired,
}

PureField.defaultProps = {
  className: {},
  type: 'text',
  placeholder: 'Input your text',
  errorMessage: '',
  onChange: undefined,
  onBlur: undefined,
}

export default Input
