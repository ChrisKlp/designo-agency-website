import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CallToAction from '../components/CallToAction/CallToAction'
import Container from '../components/helpers/Container'
import { PageIntro } from '../components/Intro'
import { CategoryList, ProjectCard } from '../components/Projects'
import media from '../global/mediaQueries'

const StyledContainer = styled(Container)`
  width: 100%;

  @media (${media.md}) {
    width: 90%;
  }
`

const StyledCategoryList = styled(CategoryList)`
  margin-bottom: 12rem;

  @media (${media.lg}) {
    margin-bottom: 16rem;
  }
`

const Projects = styled.div`
  margin: 12rem 0;
  display: grid;
  gap: 4rem;

  @media (${media.md}) {
    gap: 3.2rem;
  }

  @media (${media.lg}) {
    margin: 16rem 0;
    grid-template-columns: repeat(3, 1fr);
  }
`
const ProjectLayout = ({ data }) => {
  const { heading, text, slug, projects } = data.projectsJson
  return (
    <>
      <StyledContainer>
        <PageIntro heading={heading} text={text} />
      </StyledContainer>
      <Container>
        <Projects>
          {projects.map(({ title, content, image }) => (
            <ProjectCard
              key={title}
              title={title}
              content={content}
              image={image.childImageSharp.fluid}
            />
          ))}
        </Projects>
        <StyledCategoryList filter={slug} />
      </Container>
      <CallToAction />
    </>
  )
}

export const query = graphql`
  query projectsCategory($id: String!) {
    projectsJson(id: { eq: $id }) {
      heading
      text
      slug
      projects {
        title
        content
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

ProjectLayout.propTypes = {
  data: PropTypes.shape({
    projectsJson: PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      slug: PropTypes.string,
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
          image: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.objectOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              ),
            }),
          }),
        })
      ),
    }),
  }),
}

export default ProjectLayout
