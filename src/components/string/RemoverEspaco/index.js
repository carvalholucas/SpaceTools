import React, { useRef } from 'react'

import { Copy } from 'styled-icons/boxicons-solid'
import * as S from './styles'

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
            <S.Card id="textId">
                <S.TextArea
                    aria-labelledby="textId"
                    name="text"
                    rows="10"
                    ref={inputRef}
                    placeholder="Escreva ou cole (copy & paste) o seu texto aqui"
                />

                <S.Footer>
                    <S.Actions>
                        <S.Button
                            className="clear"
                            onClick={() => inputRef.current.value = "" }
                        >Limpar</S.Button>
                    </S.Actions>

                    <S.Actions>
                        <S.Button className="block" onClick={() => handleRemove()}> Remover Espaços </S.Button>
                        <S.Button className="block" onClick={event => handleCopy(event)} style={{ marginLeft: 15 }}>
                            Copiar
                            <Copy size={18} style={{ marginLeft: 15 }} />
                        </S.Button>
                    </S.Actions>
                </S.Footer>
            </S.Card>
        </>
    )
}

export default RemoverEspaco