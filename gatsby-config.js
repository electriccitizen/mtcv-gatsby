/**
 * gatbsy-config.js is a required file that stores basic configuration and exports the applications React
 * components.
 * @type {{plugins: *[], siteMetadata: {author: string, description: string, title: string, slogan: string}}}
 */

// ALGOLIA
//const queries = require('./src/utils/algolia')
//require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `MT CRIME VICTIM HELP`,
    siteUrl: `https://www.mtcrimevictimhelp.org`,
    description: `Resources for crime victims in the state of Montana.`,
    slogan: "We are a free, nonprofit resource for victims of crime in the state of Montana."
  },

  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',

    // UTILITY
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    // SOURCE DRUPAL
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://dev-mtcv.pantheonsite.io/',
        //baseUrl: 'http://mtcv.docksal/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },


    // SOURCE FILESYSTEM (STATIC IMAGES)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // ALGOLIA
    //{
    //  resolve: `gatsby-plugin-algolia`,
    //  options: {
    //    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //    queries,
    //    chunkSize: 10000, // default: 1000
    //  },
    //},

    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ]
};
