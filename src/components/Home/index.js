import React, { useEffect, useState, useRef } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'
import * as S from './styles'

const Home = () => {
    const [type, setType] = useState("")
    const inputRef = useRef(null)

    function handleCopy() {
        inputRef.current.select()
        document.execCommand("copy")
    }

    useEffect(() => {
        setType("")
    }, [])

    return (
        <S.Section>
            <S.Desc>
                <h1>Converter Maiúscula para Minúscula</h1>
                <p>Converta de maiúscula para minúscula, ou vice-versa, basta digitar a frase, depois clique nas opções abaixo:</p>
            </S.Desc>

            <S.Card>
                <S.TextArea
                    aria-label="Sua frase"
                    type={type}
                    name="text"
                    rows="10"
                    ref={inputRef}
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <S.Button className={type === "uppercase" ? "active" : ""} onClick={() => setType('uppercase')}>Maiúsculo</S.Button>
                        <S.Button className={type === "lowercase" ? "active" : ""} onClick={() => setType('lowercase')}>Minúsculo</S.Button>
                        <S.Button className={type === "capitalize" ? "active" : ""} onClick={() => setType('capitalize')}>Primeira Letra Maiúscula</S.Button>
                        <S.Button className="clear" onClick={() => {
                            inputRef.current.value = ""
                            setType("")
                        }}>Limpar</S.Button>
                    </S.Actions>
                    <S.Button className="copy" onClick={event => handleCopy(event)}>Copiar <Copy size={18} style={{ marginLeft: 15 }} /></S.Button>
                </S.Footer>
            </S.Card>
        </S.Section>
    )
}

export default Home