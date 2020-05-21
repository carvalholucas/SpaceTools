import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RemoverEspaco from "../components/string/RemoverEspaco"

import Description from "../components/Description"
import * as L from "../components/Layout/styles"

const RemoverEspacos = () => (
	<Layout>
		<SEO 
			title="Remover Espaços Extras Online"
			description="Remova os espaços em branco extras em seu texto, com a nossa ferramenta online. Simples, rápido e gratuíto."
		/>
		<L.Main>
			<L.Section>
				<L.Desc>
					<h1>Remover espaços extras</h1>
					<p>Precisa remover os espaços extras em seus textos? Podemos ajudar você a fazer isso.</p>
				</L.Desc>
				<RemoverEspaco />
			</L.Section>
		</L.Main>
	</Layout>
)

export default RemoverEspacos
