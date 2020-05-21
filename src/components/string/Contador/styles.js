import styled from 'styled-components'
import media from "styled-media-query"

export const Card = styled.article`
    background: #fff;
    width: 50vw;
    transform: translateY(-5em);

    ${media.between("medium", "large")`
        width: 100%;
    `}    

    ${media.lessThan("medium")`
        width: 100%;
    `}
`

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

export const TextArea = styled.textarea`
    border: none;
    color: #2a2a2a;
    font-size: 1.1em;
    font-family: 'Poppins', sans-serif;
    outline: 0;
    padding: 2em;
    resize: none;
    text-transform: ${props => props.type || 'initial'};
    width: 100%;

    ::placeholder {
        color: #d9d9d9;
        font-weight: 300;
    }

    ${media.lessThan("medium")`
        
    `}
`

export const Numbers = styled.section`
    display: flex;
    padding: 0 1.5em;
    width: 50vw;

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