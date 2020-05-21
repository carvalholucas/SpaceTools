import React from 'react'

import * as S from './styles'

const Link = ({ children, color, direction, route }) => {
    return (
        <S.Link
            cover
            direction={direction ? direction : "right"}
            bg={color ? color : "#482992"}
            duration={1}
            to={route}
            activeClassName="active"
        >
            {children}
        </S.Link>
    )
}

export default Link