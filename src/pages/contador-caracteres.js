import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contador from "../components/string/Contador"

import * as L from "../components/Layout/styles"

import Image from '../images/bg2.png'

const ContadorPage = () => (
	<Layout>
		<SEO 
			title="Contador de Caracteres, Palavras e Linhas Online"
			description="Ferramenta online para contar caracteres, palavras e linhas em um texto. Simples, rápido e fácil."
		/>
		<L.Main>
			<L.Section>
				<L.Desc bg={Image}>
					<h1>Contador de Caracteres, Palavras e Linha</h1>
					<p>Precisa remover os espaços extras em seus textos? Podemos ajudar você a fazer isso.</p>
				</L.Desc>
				<Contador />
			</L.Section>
		</L.Main>
	</Layout>
)

export default ContadorPage
