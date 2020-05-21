import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Wrap = styled.section`
    min-height: calc(100vh - 4em);
    max-height: 100%;
    padding: 4em 0;
`

export const Title = styled.h1`
    font-size: 1.4em;
    font-weight: 500;
    margin: 2em 0 2em;

    &:first-child {
        margin-top: 0;
    }
`

export const CardWrap = styled.section`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

    &:before {
        content: '';
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    & > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }
`

export const Card = styled.article`
    align-items: center;
    background: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding: 1.5em;
    text-align: center;
    transition: transform .3s;

    &:hover {
        transform: scale(1.1)
    }

    p.coming {
        color: #7a7a7a;
        font-size: .7em;
    }

    .icon {
        align-items: center;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
`

export const CardDesc = styled.section`
    h1 {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.5em;
        margin-bottom: .6em;
    }

    p {
        color: #637381;
        font-size: .9em;
        font-weight: 300;
        line-height: 1.5;
    }
`

export const CardIcon = styled.div`
    background: rgba(72, 41, 146, .2);
    color: #482992;
    height: 4em;
    width: 4em;
`

export const Link = styled(AniLink)`
    text-decoration: none;
`