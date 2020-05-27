import styled from 'styled-components'
import media from "styled-media-query"

export const Footer = styled.footer`
    align-items: center;
    border-top: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;

    ${media.lessThan("medium")`
        align-items: initial;
        flex-direction: column;
    `}
`

export const Actions = styled.div`
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
    `}
`

export const Numbers = styled.section`
    align-self: center;
    display: flex;
    margin-top: 2em;
    padding: 0 1.5em;
    width: 60vw;

    ${media.lessThan("medium")`
        flex-direction: column;
        margin-bottom: 1em;
        width: 100%;
    `}

    p {
        font-size: .9em;
        margin: 0 3em 1em 0;
    }

    span {
        font-size: 1.3em;
        font-weight: 700;
        margin-left: .3em;
        vertical-align: middle;
    }
`