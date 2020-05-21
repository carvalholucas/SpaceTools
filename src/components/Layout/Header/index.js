import React from "react"

import * as S from './styles'
import Link from '../../Link'

import LogoDark from '../../../images/logo.png'
import LogoWhite from '../../../images/logo-white.png'

const Header = ({ white }) => (
	<S.Header>
		<Link 
			route="/"
			direction="left">
			<S.Logo>
				<img src={white ? LogoWhite : LogoDark} alt="Space Tools" />
			</S.Logo>
		</Link>
		{/* <S.Donate>Doe-me um café</S.Donate> */}
	</S.Header>
)

export default Header
