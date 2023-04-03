module.exports = {
  siteMetadata: {
    title: 'Teleport Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project.',
    author: 'teleportHQ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            exportLocalsConvention: "asIs",
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/playground_assets`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    ],
}