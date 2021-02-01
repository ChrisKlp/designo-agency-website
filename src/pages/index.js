import React from 'react'
import styled from 'styled-components'
import Features from '../components/Features/Features'
import Container from '../components/helpers/Container'
import CallToAction from '../components/CallToAction/CallToAction'
import { MainIntro } from '../components/Intro'
import media from '../global/mediaQueries'
import { CategoryList } from '../components/Projects'

const StyledCategoryList = styled(CategoryList)`
  margin: 12rem 0;

  @media (${media.lg}) {
    margin: 16rem 0;
  }
`

const StyledFeatures = styled(Features)`
  margin-bottom: 12rem;

  @media (${media.md}) {
    margin-bottom: 6.7rem;
  }

  @media (${media.md}) {
    margin-bottom: 16rem;
  }
`

const IndexPage = () => (
  <>
    <MainIntro />
    <Container>
      <StyledCategoryList />
      <StyledFeatures />
    </Container>
    <CallToAction />
  </>
)

export default IndexPage
