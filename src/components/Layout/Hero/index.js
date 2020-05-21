import React from  'react'

import * as S from './styles'

import Header from '../Header'

import ImgAstronaut from '../../../images/astronaut3.png'
import Image from '../../../images/bg2.png'

const Hero = () => (
   <S.Hero bg={Image}>
       <Header white={true}/>
       <S.HeroCopy>
           <h1>Um universo de ferramentas, para todas as situações</h1>
           <S.Button>Sugerir uma ferramenta</S.Button>
           <S.Astronaut className="bounce" src={ImgAstronaut}/>
       </S.HeroCopy>
   </S.Hero>
)

export default Hero