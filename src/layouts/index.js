import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../global/theme'
import GlobalStyle from '../global/GlobalStyle'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      file(name: { regex: "/fav/" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet
          htmlAttributes={{ lang: `en` }}
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: data.file.publicURL,
            },
          ]}
        />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
