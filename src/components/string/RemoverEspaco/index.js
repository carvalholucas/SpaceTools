import React, { useRef } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'

import * as S from './styles'
import * as G from '../../Layout/styles'

const RemoverEspaco = () => {
    const inputRef = useRef(null)

    function handleRemove() {
        const current = inputRef.current
        const text = current.value

        current.value = text.replace(/\s\s+/g, ' ')
    }

    function handleCopy() {
        inputRef.current.select()
        document.execCommand("copy")
    }

    return (
        <>
            <G.Card id="textId">
                <G.TextArea
                    aria-labelledby="textId"
                    name="text"
                    rows="10"
                    ref={inputRef}
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <G.Button
                            className="clear"
                            onClick={() => inputRef.current.value = "" }
                        >Limpar</G.Button>
                    </S.Actions>

                    <S.Actions>
                        <G.Button className="block" onClick={() => handleRemove()}> Remover Espaços </G.Button>
                        <G.Button className="block" onClick={event => handleCopy(event)} style={{ marginLeft: 15 }}>
                            Copiar
                            <Copy size={18} style={{ marginLeft: 15 }} />
                        </G.Button>
                    </S.Actions>
                </S.Footer>
            </G.Card>
        </>
    )
}

export default RemoverEspaco