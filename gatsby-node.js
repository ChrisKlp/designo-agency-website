const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/layouts/project.js`)
  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  result.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: projectTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
