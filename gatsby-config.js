const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const path = require(`path`)
const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Kloud Partners",
    author: "James Aspinall",
    description: "Software Sales Recruitment Company",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kloud Partners",
        short_name: "KloudPartners",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.black,
        icon: "static/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
