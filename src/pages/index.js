import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Home from "../components/Home"

import { Main } from "../components/Layout/styles"

const HomePage = () => (
	<Layout hasHero>
		<SEO 
			title="Ferramentas Online Grátis"
			description="Ferramentas online gratuitas para todas as situações, trabalhe com texto, imagens, listas, números e muitas outras úteis para programadores."
		/>
		<Main>
			<Home />
		</Main>
	</Layout>
)

export default HomePage