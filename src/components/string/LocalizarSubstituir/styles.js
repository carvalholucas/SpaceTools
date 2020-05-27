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

export const Fields = styled.section`
    align-self: center;
    margin-top: 2em;
    width: 60vw;

    button {
        float: right;
        margin-top: 4em;
    }

    ${media.lessThan("medium")`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1em;

        button {
            float: inherit;
            margin: 0 0 2em;
        }
    `}
`

export const FieldWrap = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        border: none;
        font-size: 1em;
        outline: 0;
        padding: 1.5em;
        width: 45%;

        ::placeholder {
            color: #a9a9a9;
            font-weight: 300;
        }

        &:focus {
            border-color: rgba(25, 25, 25, 0.3);
        }
    }

    ${media.lessThan("medium")`
        flex-direction: column;

        input {
            margin-bottom: 2em;
            width: 100%;
        }
    `}
`