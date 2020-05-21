import React from 'react'

import { categories, tools } from "./tools"

import { Font, Search } from '@styled-icons/boxicons-regular'
import { BackspaceOutline } from '@styled-icons/evaicons-outline'
import { SortNumerically } from '@styled-icons/typicons'

import * as S from './styles'

import Link from '../Link'

const Home = () => {

    const handleIcon = (type) => ({
        'case': <Font size={25} />,
        'remove': <BackspaceOutline size={25} style={{ marginLeft: -3 }} />,
        'search': <Search size={25} />,
        'counter': <SortNumerically size={25} />
    }[type] || 'Nnehum ícone encontrado')

    return (
        <S.Wrap>
            {categories.map((cat, index) => {
                if (!cat.disable)
                    return (
                        <>
                            <S.Title key={index}>{cat.label}</S.Title>
                            <S.CardWrap>
                                {tools.map((tool, index) => {
                                    if (tool.category === cat.value)
                                        return (
                                            <Link route={tool.route} key={index}>
                                                <S.Card>
                                                    <S.CardIcon className="icon">{handleIcon(tool.icon)}</S.CardIcon>
                                                    <S.CardDesc>
                                                        <h1>{tool.title}</h1>
                                                        <p>{tool.desc}</p>
                                                    </S.CardDesc>
                                                </S.Card>
                                            </Link>
                                        )
                                })}
                            </S.CardWrap>
                        </>
                    )
            })}
        </S.Wrap>
    )
}

export default Home