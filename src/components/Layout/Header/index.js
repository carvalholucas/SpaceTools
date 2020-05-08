import React from "react"

import Icon from '../../../images/icon.png'
import * as S from './styles'

const Header = ( ) => (
	<S.Header>
		<S.Logo>
			<img className="icon" src={Icon} alt="Convert text - Lazytext"/>
			Lazytext
		</S.Logo>
		{/* <S.Donate>Doe-me um café</S.Donate> */}
	</S.Header>
)

export default Header
