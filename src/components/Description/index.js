import React from 'react'

import * as S from './styles'

const Description = ({ text }) => (
    <S.Description>
        <S.Content>
            {text}
        </S.Content>
    </S.Description>
)

export default Description