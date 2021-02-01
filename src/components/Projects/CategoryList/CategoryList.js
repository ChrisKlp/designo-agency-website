import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import CategoryCard from '../CategoryCard/CategoryCard'
import media from '../../../global/mediaQueries'

const Wrapper = styled.ul`
  display: grid;
  gap: 2.4rem;

  @media (${media.lg}) {
    gap: 3rem;
    grid-template: 1fr / repeat(2, 1fr);

    ${({ homePage }) =>
      homePage &&
      css`
        gap: 2.4rem 3rem;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);

        & li:first-child {
          grid-area: 1 / 1 / 3 / 2;
        }
      `};
  }
`

const CategoryList = ({ className, filter }) => {
  const query = useStaticQuery(graphql`
    {
      allProjectsJson(sort: { fields: order }) {
        nodes {
          id
          heading
          slug
          categoryImages {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          categoryImageLarge {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const data = query.allProjectsJson.nodes
  const filtredData = data.filter(data => data.slug !== filter)

  return (
    <Wrapper className={className} homePage={filtredData.length === 3}>
      {filtredData.map(
        ({ id, heading, slug, categoryImages, categoryImageLarge }) => (
          <li key={id}>
            <CategoryCard
              title={heading}
              to={`/${slug}`}
              images={categoryImages}
              imageXL={
                filtredData.length === 3 && categoryImageLarge
                  ? categoryImageLarge
                  : null
              }
            />
          </li>
        )
      )}
    </Wrapper>
  )
}

CategoryList.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  filter: PropTypes.string,
}

export default CategoryList
