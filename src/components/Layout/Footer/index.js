import React from 'react'

import * as S from './styles'

import Astronaut from '../../../images/astronaut1.png'
import Image from '../../../images/bg2.png'

const Footer = () => (
    <>
        <S.SubFooter bg={Image}>
            <S.Astronaut className="bounce-footer" src={Astronaut} alt="Space Tools" />
            <S.Call>
                <h2>Não encontrou uma ferramenta que te ajudasse? </h2>
                <S.Action>Sugerir uma ferramenta</S.Action>
            </S.Call>
        </S.SubFooter>
        <S.Footer>
            <p>Space Tools © 2020 - Todos os direitos reservados</p>
        </S.Footer>
    </>
)

export default Footer