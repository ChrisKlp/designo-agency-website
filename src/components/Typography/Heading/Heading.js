import styled, { css } from 'styled-components'
import media from '../../../global/mediaQueries'

const Heading = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  font-size: 3.2rem;
  line-height: 3.6rem;

  @media (${media.md}) {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }

  ${({ h2 }) =>
    h2 &&
    css`
      font-size: 2.8rem;
      line-height: 3.6rem;
      letter-spacing: 0.14rem;

      @media (${media.md}) {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: 0.2rem; 
      }
    `};

  ${({ h3 }) =>
    h3 &&
    css`
      font-size: 2rem;
      line-height: 2.6rem;
      letter-spacing: 0.5rem;
      text-transform: uppercase;

      @media (${media.md}) {
        font-size: 2rem;
        line-height: 2.6rem;
      }
    `};
`

export default Heading
