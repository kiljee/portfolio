module.exports = {
  siteMetadata: {
    title: 'Aleksandar Okiljevic - Portfolio'
  },
  pathPrefix: "/gatsby-portfolio",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f6f1ed',
        theme_color: '#f6f1ed',
        display: 'minimal-ui',
        icon: 'src/images/avatar.jpg' // This path is relative to the root of the site.
      }
    }
    // 'gatsby-plugin-offline',
  ]
};