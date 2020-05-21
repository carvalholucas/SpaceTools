import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Localizar from "../components/string/LocalizarSubstituir"

import * as L from "../components/Layout/styles"

const LocalizarSubstituir = () => (
	<Layout>
		<SEO 
			title="Localizar e Substituir Palavras Online"
			description="Localize e substitua palavras em seu texto de maneira fácil, rápida e gratuitamente com a nossa ferramenta online."
		/>
		<L.Main>
			<L.Section height="120vh">
				<L.Desc>
					<h1>Localizar e Substituir Palavras</h1>
					<p>Precisa remover os espaços extras em seus textos? Podemos ajudar você a fazer isso.</p>
				</L.Desc>
				<Localizar />
			</L.Section>
		</L.Main>
	</Layout>
)

export default LocalizarSubstituir
