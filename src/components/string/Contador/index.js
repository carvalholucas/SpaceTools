import React, { useRef, useState } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'
import { ExchangeAlt } from 'styled-icons/fa-solid'

import * as S from './styles'

const Contador = () => {
    const inputRef = useRef(null)
    const [caracteres, setCaracteres] = useState(0)
    const [words, setWords] = useState(0)
    const [lines, setLines] = useState(0)

    function handleChange() {
        const value = inputRef.current.value
        const words = value.match(/\b[-?(\w+)?]+\b/gi)
        const lines = value.split('\n')

        setCaracteres(value.length)
        setWords(words.length)
        setLines(lines.length)
    }

    function handleClear() {
        inputRef.current.value = ""
        setCaracteres(0)
        setWords(0)
        setLines(0)
    }

    return (
        <>
            <S.Card id="textId">
                <S.TextArea
                    aria-labelledby="textId"
                    name="text"
                    rows="8"
                    ref={inputRef}
                    onChange={() => handleChange()}
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <S.Button
                            className="clear"
                            onClick={() => handleClear()}
                        >Limpar</S.Button>
                    </S.Actions>
                </S.Footer>
            </S.Card>

            <S.Numbers>
                <p>Caracteres: <span>{caracteres}</span></p>
                <p>Palavras: <span>{words}</span></p>
                <p>Linhas: <span>{lines}</span></p>
            </S.Numbers>
        </>
    )
}

export default Contador