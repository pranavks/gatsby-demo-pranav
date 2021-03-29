const path = require('path');

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const npsTemplate = path.resolve('./src/templates/benchmark.js');

    const response = await graphql(`
    query {
        allNpsBenchmarkDataXlsxSheet1 {
          edges {
            node {
                Company_Name
            }
          }
        }
      }
    `)

    response.data.allNpsBenchmarkDataXlsxSheet1.edges.forEach((edge) => {
        const slug = edge.node.Company_Name.replace(/\s+/g, '-').toLowerCase();
        createPage({
            component: npsTemplate,
            path: `/nps/${slug}`,
            context: {
                slug: edge.node.Company_Name
            }
        })
    })
}
