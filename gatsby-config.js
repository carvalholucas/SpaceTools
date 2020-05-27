require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `Space Tools`,
		description: `Ferramentas Onlines Grátis`,
		author: `Lucas Carvalho`,
		siteUrl: `https://spacetools.me/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-transition-link`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://spacetools.me/',
				sitemap: 'https://spacetools.me/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_ID,
				head: false
			},
		},
		{
			resolve: `gatsby-plugin-google-adsense`,
			options: {
				publisherId: process.env.GOOGLE_ADSENSE
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Poppins`,
						variants: [`200`, `300`, `400`, `500`, `700`]
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Space Tools`,
				short_name: `Space Tools`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#2a2a2a`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`,
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
	],
}
