import React from 'react'
import styled from 'styled-components'
import Container from '../helpers/Container'
import Img from 'gatsby-image'
import { Paragraph } from '../Typography'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SocialIcons from './SocialIcons/SocialIcons'
import media from '../../global/mediaQueries'

const Wrapper = styled.footer`
  padding: 6.4rem 0;
  background: ${({ theme }) => theme.colors.dark};

  @media (${media.md}) {
    padding: 8rem 0;
  }

  @media (${media.lg}) {
    padding: 7.2rem 0;
  }
`

const StyledContainer = styled(Container)`
  display: grid;
  justify-items: center;
  text-align: center;

  @media (${media.md}) {
    grid-template:
      'logo menu menu' auto
      'divider divider divider' auto
      'address1 address2 social' auto
      / 1fr 1fr 1fr;
    text-align: left;
    justify-items: start;
    align-items: center;
  }
`

const Logo = styled(Img)`
  @media (${media.md}) {
    grid-area: logo;
  }
`

const Divider = styled.div`
  margin: 3.2rem 0;
  width: 100%;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0.1;

  @media (${media.md}) {
    grid-area: divider;
    margin: 4rem 0 3.2rem;
  }
`

const Navigation = styled.nav`
  margin-bottom: 4rem;

  @media (${media.md}) {
    grid-area: menu;
    justify-self: end;
    margin: 0;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  text-transform: uppercase;

  @media (${media.md}) {
    flex-direction: row;
    gap: 4.2rem;
  }
`

const NavItem = styled.li`
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    text-decoration: underline;
  }
`

const Address = styled.address`
  margin-bottom: 4rem;
  display: block;
  & ${Paragraph} {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
  }

  @media (${media.md}) {
    margin: 0;

    &:first-of-type {
      grid-area: address1;
    }
    &:last-of-type {
      grid-area: address2;
    }
  }
`

const StyledSocialIcons = styled(SocialIcons)`
  @media (${media.md}) {
    grid-area: social;
    justify-self: end;
    align-self: end;
  }
`

const Footer = () => {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shared/desktop/logo-light.png" }) {
        childImageSharp {
          fixed(width: 197) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <StyledContainer>
        <Logo fixed={logo.file.childImageSharp.fixed} />
        <Divider />
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/about">Our Company</Link>
            </NavItem>
            <NavItem>
              <Link to="/locations">Locations</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavList>
        </Navigation>
        <Address>
          <Paragraph bold>Designo Central Office</Paragraph>
          <Paragraph>3886 Wellington Street</Paragraph>
          <Paragraph>Toronto, Ontario M9C 3J5</Paragraph>
        </Address>
        <Address>
          <Paragraph bold>Contact Us (Central Office)</Paragraph>
          <Paragraph>P : +1 253-863-8967</Paragraph>
          <Paragraph>M : contact@designo.co</Paragraph>
        </Address>
        <StyledSocialIcons />
      </StyledContainer>
    </Wrapper>
  )
}

export default Footer
