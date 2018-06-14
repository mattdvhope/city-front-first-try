const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   if (stage === "build-html") {
//     config.loader(
//       "null",
//       { test: /mdbreact/,
//         loader: "null-loader"
//       })
//   }
// };


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  // We’re using the passed in graphql function to query for the Markdown slugs we just created.
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

// use 'getNode' to traverse the “node graph” to its parent File node, as File nodes contain data we need about files on disk
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    // Use 'createFilePath' (imported) to create slugs from file names. The function handles finding the parent File node along with creating the slug.
    const value = createFilePath({ node, getNode })
    // 'createNodeField' allows us to add our new slugs directly onto the MarkdownRemark nodes.  This function allows us to create additional fields on nodes created by other plugins. 
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/:path";

    // Update the page.
    createPage(page);
  }
};
