import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import Container from '../helpers/Container'
import Img from 'gatsby-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import media from '../../global/mediaQueries'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import { useMediaQuery } from 'react-responsive'

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;

  ${({ active }) =>
    active &&
    css`
      position: fixed;
    `};
`

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9.6rem;

  @media (${media.md}) {
    height: 15.5rem;
  }
`
// prettier-ignore
const MenuToggleButton = styled.button`
  padding: 2rem;
  margin: -2rem -1rem -2rem;
  width: 2.4rem;
  height: 2rem;
  background-color: transparent;
  background-image: url(${({ active, hamburger, close }) => active ? close : hamburger});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;

  @media (${media.md}) {
    display: none;
  }
`

const Navigation = styled.nav`
  position: fixed;
  display: ${({ active }) => (active ? 'block' : 'none')};
  top: 9.6rem;
  left: 0;
  width: 100%;
  padding: 4.8rem 0;
  background: ${({ theme }) => theme.colors.dark};

  @media (${media.md}) {
    position: static;
    display: block;
    padding: 0;
    width: auto;
    background: none;
  }
`

const NavList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 87.2%;

  @media (${media.md}) {
    flex-direction: row;
    align-items: center;
    gap: 4.2rem;
    width: 100%;
  }
`

const NavItem = styled.li`
  font-size: 2.4rem;
  line-height: 2.5rem;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  @media (${media.md}) {
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 9.6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 9.6rem);
  background: hsla(0, 0%, 0%, 0.5);
  z-index: -1;
`

const Divider = styled.div`
  height: 9.6rem;
`

export const PureHeader = () => {
  const navRef = useRef(null)
  const isTablet = useMediaQuery({ minWidth: 768 })
  const [active, setActive] = useDetectOutsideClick(navRef, false)

  const handleClick = () => setActive(!active)
  const handleClose = () => setActive(false)

  useEffect(() => {
    if (isTablet) return handleClose()
  }, [isTablet])

  const { logo, hamburger, close } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "shared/desktop/logo-dark.png" }) {
        childImageSharp {
          fixed(width: 202) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      hamburger: file(
        relativePath: { eq: "shared/mobile/icon-hamburger.svg" }
      ) {
        publicURL
      }
      close: file(relativePath: { eq: "shared/mobile/icon-close.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Wrapper active={active}>
        <StyledContainer>
          <Link to="/" aria-label="Designo Logo">
            <Img fixed={logo.childImageSharp.fixed} />
          </Link>
          <MenuToggleButton
            onClick={handleClick}
            active={active}
            hamburger={hamburger.publicURL}
            close={close.publicURL}
            aria-label="Menu Toggle Button"
          />
          <Navigation active={active} ref={navRef}>
            <NavList>
              <NavItem>
                <Link to="/about" onClick={handleClose}>
                  Our Company
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/locations" onClick={handleClose}>
                  Locations
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" onClick={handleClose}>
                  contact
                </Link>
              </NavItem>
            </NavList>
          </Navigation>
        </StyledContainer>
        {active && <Overlay />}
      </Wrapper>
      {active && <Divider />}
    </>
  )
}

const Header = props => {
  return <PureHeader {...props} />
}

export default Header
