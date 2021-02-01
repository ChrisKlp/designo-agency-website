import styled, { css } from 'styled-components'
import media from '../../../global/mediaQueries';

const Paragraph = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.6rem;
  line-height: 2.6rem;

  ${({ small }) =>
    small &&
    css`
      font-size: 1.5rem;
      line-height: 2.5rem;

      @media (${media.md}) {
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
`

export default Paragraph
