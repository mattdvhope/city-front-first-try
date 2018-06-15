import React from 'react';
import WelcomeCaption from './WelcomeCaption';

export default ({ data }) => (

  <WelcomeCaption description={data.markdownRemark.frontmatter.welcome_description} />

);

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        welcome_description
      }
    }
  }
`

