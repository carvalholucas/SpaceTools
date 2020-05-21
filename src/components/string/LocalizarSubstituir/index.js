import React, { useRef, useState } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'
import { ExchangeAlt } from 'styled-icons/fa-solid'

import * as S from './styles'

const LocalizarSubstituir = () => {
    const textRef = useRef(null)
    const searchRef = useRef(null)
    const replaceRef = useRef(null)

    function handleSearch(search) {
        const text = textRef.current.value
        const lengthSearch = text.match(search).length

        lengthSearch > 0 ? console.log('Resultado:' + lengthSearch) : console.log('Nenhum resultado encontrado')
    }

    function handleReplace(replace) {
        const currentValue = textRef.current.value
        const currentSearch = searchRef.current.value

        if (currentValue != "") {
            const regex = new RegExp(currentSearch, "g")
            textRef.current.value = currentValue.replace(regex, replace)
        }
    }

    function handleCopy() {
        textRef.current.select()
        document.execCommand("copy")
    }

    return (
        <>
            <S.Card id="textId">
                <S.TextArea
                    aria-labelledby="textId"
                    name="text"
                    rows="8"
                    ref={textRef}
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <S.Button
                            className="clear"
                            onClick={() => textRef.current.value = ""}
                        >Limpar</S.Button>
                    </S.Actions>

                    <S.Actions>
                        <S.Button className="block copy" onClick={event => handleCopy(event)} style={{ marginLeft: 15 }}>
                            Copiar
                            <Copy size={18} style={{ marginLeft: 15 }} />
                        </S.Button>
                    </S.Actions>
                </S.Footer>
            </S.Card>

            <S.Fields>
                <S.FieldWrap>
                    <input
                        type="text"
                        ref={searchRef}
                        onBlur={() => handleSearch(searchRef.current.value)}
                        placeholder="Pesquisar por"
                    />

                    <input
                        type="text"
                        ref={replaceRef}
                        placeholder="Substituir por"
                    />
                </S.FieldWrap>
                <S.Button
                    className="block"
                    onClick={() => handleReplace(replaceRef.current.value)}
                > 
                Pesquisar & Substituir
                <ExchangeAlt size={18} style={{ marginLeft: 15 }} />
                </S.Button>
            </S.Fields>
        </>
    )
}

export default LocalizarSubstituir