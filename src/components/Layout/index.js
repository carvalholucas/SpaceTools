import React from "react"

import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"

import * as S from "./styles"
import GlobalStyles from "../styles/global"

const Layout = ({ children, hasHero }) => {
	return (
		<>
			<GlobalStyles />
			<S.Wrapper hasHero={hasHero}>
				{!hasHero &&<Header white={true}/>}
				{hasHero && <Hero />}
				{children}
				<Footer />
			</S.Wrapper>
		</>
	)
}

export default Layout
