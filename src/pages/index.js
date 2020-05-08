import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import Description from "../components/Description"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Home />
		{/* <Description /> */}
	</Layout>
)

export default IndexPage
