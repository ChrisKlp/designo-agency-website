import styled, { css } from "styled-components"

const Button = styled.button`
  padding: 1.8rem 0 1.6rem;
  width: 15.2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondary};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};
    `};
`

export default Button
