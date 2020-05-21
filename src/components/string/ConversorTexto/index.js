import React, { useEffect, useState, useRef } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'

import * as S from './styles'
import * as G from '../../Layout/styles'

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
        <G.Card id="textId">
            <G.TextArea
                aria-labelledby="textId"
                type={type}
                name="text"
                rows="10"
                ref={inputRef}
                placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
            />

            <S.Footer>
                <S.Actions>
                    <G.Button className={type === "uppercase" ? "active" : ""} onClick={() => setType('uppercase')}>Maiúsculo</G.Button>
                    <G.Button className={type === "lowercase" ? "active" : ""} onClick={() => setType('lowercase')}>Minúsculo</G.Button>
                    <G.Button className={type === "capitalize" ? "active" : ""} onClick={() => setType('capitalize')}>Primeira Letra Maiúscula</G.Button>
                    <G.Button className="clear" onClick={() => {
                        inputRef.current.value = ""
                        setType("")
                    }}>Limpar</G.Button>
                </S.Actions>
                <G.Button className="copy" onClick={event => handleCopy(event)}>Copiar <Copy size={18} style={{ marginLeft: 15 }} /></G.Button>
            </S.Footer>
        </G.Card>
    )
}

export default Home