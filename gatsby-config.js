module.exports = {
  siteMetadata: {
    title: `致敬诗经之骏注骏译`,
    description: `书香君带你走入《诗经》的世界`,
    keywords: [`钟国骏`, `书香君`, `诗经`, `注释`, `翻译`],
    author: `书香君`,


    siteUrl: `https://gatsby-starter-catalyst-helium.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `关于`,
        link: `/about`,
      },

    ],
    socialLinks: [
      {
        name: `Email`,
        link: `3297852834@qq.com`,
        location: `all`, //Options are "all", "header", "footer"
      },

    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 140,
        // Lithium theme
        useHero: true,
        useAlertBanner: false,
        postListTitle: `诗经`,
        displayPostListTitle: false,
      },

    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/shijing-logo.png`, // This path is relative to the root of the site.
      },
      variants: {
        siteLogo: `content/assets/shijing-logo.png`,
      },
      
    },
  ],
}
