import React, { useState } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'
import * as S from './styles'

const Home = () => {
    const [type, setType] = useState("")

    return (
        <S.Section>
            <S.Desc>
                <h1>Converter Maiúscula para Minúscula</h1>
                <p>Converta de maiúscula para minúscula, ou vice-versa, basta digitar a frase, depois clique nas opções abaixo:</p>
            </S.Desc>

            <S.Card>
                <S.TextArea
                    type={type}
                    name="text"
                    rows="10"
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <span onClick={() => setType('uppercase')}>Maiúsculo</span>
                        <span onClick={() => setType('lowercase')}>Maiúsculo</span>
                        <span onClick={() => setType('capitalize')}>Primeira Letra Maiúscula</span>
                    </S.Actions>
                    <span className="copy">Copiar <Copy size={18} style={{ marginLeft: 15 }} /></span>
                </S.Footer>
            </S.Card>
        </S.Section>
    )
}

export default Home