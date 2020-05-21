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

export const Button = styled.button`
    border: none;
    color: #616161;
    cursor: pointer;
    font-size: .8em;
    font-family: 'Poppins', sans-serif;
    outline: 0;
    padding: 0 1em;

    &.active {
        color: #2a2a2a;
        text-decoration: underline;
    }

    &.block {
        background: #2a2a2a;
        color: #fff;
        cursor: pointer;
        padding: .8em;

        &.copy {
            background: rgba(42, 42, 42, 0.1);
            color: #141414;
        }

        &:hover {
            background: rgba(42, 42, 42, 0.85);
            color: #fff;
            text-decoration: none;
        }
    }

    &.clear {
        color: #c71b1b;
        padding: .8em;

        &:hover {
            background: rgba(199, 27, 27, 0.2);
            color: #c71b1b;
            text-decoration: none;
        }
    }

    &:hover {
        color: #000;
        text-decoration: underline;
    }

    &.no-pad {
        padding-left: 0;
    }

    ${media.lessThan("medium")`
        border: 1px solid #e6e6e6;
        cursor: pointer;
        margin-bottom: 1em;
        padding: .8em;

        &:first-child {
            padding-left: .8em;
        }

        &.clear {
            border-color: #c71b1b;
        }

         &:hover {
            background: #f2f2f2;
        }
    `}
`

export const Fields = styled.section`
    align-self: center;
    width: 50vw;

    button {
        float: right;
        margin-top: 4em;
    }
`

export const FieldWrap = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        border: none;
        font-size: .8em;
        outline: 0;
        padding: 1.5em;
        width: 45%;

        &:focus {
            border-color: rgba(25, 25, 25, 0.3);
        }
    }
`