import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ConversorTexto from "../components/string/ConversorTexto"

import Description from "../components/Description"
import * as L from "../components/Layout/styles"

import Image from '../images/bg2.png'

const ConverterMaiuscula = () => (
	<Layout>
		<SEO 
			title="Converter Maiúsculas e Minúsculas Online"
			description="Converta textos de maiúsculas para minúsculas, de minúsculas para maiúsculas, assim como coloque em maiúsculo a primeira letra das frases."
		/>
		<L.Main>
			<L.Section>
				<L.Desc bg={Image}>
					<h1>Conversor de Maiúscula e Minúscula</h1>
					<p>Não precisa apagar o que escreveu e redigitar tudo, podemos te ajudar.<br/> Informe seu texto, e escolha como deseja convertê-lo.</p>
				</L.Desc>
				<ConversorTexto />
			</L.Section>
			<Description text={
                <>
                    <h2>Converta de maneira simples os seus textos.</h2>

                    <p><span>Deixou acidentalmente as letras maiúsculas travadas e digitou alguma coisa? Não precisa apagar o que escreveu e redigitar tudo novamente, podemos te ajudar.</span></p>
                    <br />

                    <p>Veja só como funciona. Simplesmente digite seu texto, ou copie de onde escreveu e cole no espaço acima, escolha o caso para o qual deseja convertê-lo e pronto, clique para copiar e continue sua vida.</p>
                    <br />

                    <p>Se você gostou dessa ferramenta, salve nos seus favoritos para não esquecer da gente rs e compartilhe com seus amigos.</p>
                    <br />

                    <p>Muito obrigado!</p>
                </>}
            />
		</L.Main>
	</Layout>
)

export default ConverterMaiuscula
