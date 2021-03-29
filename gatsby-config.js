module.exports = {
  siteMetadata: {
    siteUrl: `https://pranavks.github.io/gatsby-demo-pranav`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        raw: false,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
