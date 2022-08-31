require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Freewheel Unicycle',
    description:
      'Thoughts on and experiences with juggling and unicycling.',
    keywords: 'unicycle, unicycling, freewheel unicycle, juggling, unicycle basketball',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      ptions: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
        fragmentsPath: 'hygraph-fragments',
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ['G-PR2D4QCF7G'],
        pluginConfig: {
          head: true
        }
      }
    },
    'gatsby-transformer-sharp',
  ],
}
