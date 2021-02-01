import React from 'react'
import Container from '../components/helpers/Container'
import ArticleBox from '../components/ArticleBox/ArticleBox'
import styled from 'styled-components'
import media from '../global/mediaQueries'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { IllustrationCardList } from '../components/Location'
import CallToAction from '../components/CallToAction/CallToAction'

const Wrapper = styled(Container)`
  margin-bottom: 12rem;
  width: 100%;

  @media (${media.md}) {
    width: 90%;
  }

  @media (${media.lg}) {
    margin-bottom: 16rem;
  }
`

const Intro = styled(ArticleBox)`
  @media (${media.md}) {
    margin-bottom: 12rem;
  }

  @media (${media.lg}) {
    margin-bottom: 16rem;
  }
`

const AboutPage = ({ data }) => {
  const { articles, heading, images, text } = data.dataJson.about_us

  return (
    <>
      <Wrapper>
        <Intro
          intro={true}
          secondary={true}
          title={heading}
          content={text}
          images={images}
        />
        <ArticleBox
          title={articles[0].title}
          content={articles[0].content}
          images={articles[0].images}
        />
        <IllustrationCardList />
        <ArticleBox
          secondary={true}
          title={articles[1].title}
          content={articles[1].content}
          images={articles[1].images}
        />
      </Wrapper>
      <CallToAction />
    </>
  )
}

export const query = graphql`
  {
    dataJson {
      about_us {
        heading
        text
        images {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        articles {
          content
          title
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.shape({
    dataJson: PropTypes.shape({
      about_us: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.objectOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              ),
            }),
          })
        ),
        articles: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string,
            images: PropTypes.arrayOf(
              PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.objectOf(
                    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                  ),
                }),
              })
            ),
          })
        ),
      }),
    }),
  }),
}

export default AboutPage
