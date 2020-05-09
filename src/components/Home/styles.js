import styled from 'styled-components'
import media from "styled-media-query"

export const Section = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-area: main;
    justify-content: space-evenly;
`

export const Desc = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2em;
        font-weight: 700;
        line-height: 1.5em;
        text-align: center;
    }

    p {
        color: #757575;
        font-weight: 300;
        line-height: 1.5em;
        margin-top: 2em;
        text-align: center;
        width: 70%;

        ${media.lessThan("medium")`
            width: 90%;
        `}
    }
`

export const Card = styled.article`
    background: #fff;
    width: 50vw;

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
    font-size: .8em;
    justify-content: space-between;
    padding: 1em 1.5em;

    .copy {
        background: #2a2a2a;
        color: #fff;
        cursor: pointer;
        padding: .8em;

        &:hover {
            background: rgba(42, 42, 42, 0.8);
        }
    }

    ${media.lessThan("medium")`
        align-items: initial;
        flex-direction: column;
    `}
`

export const Actions = styled.div`
    span {
        color: #757575;
        cursor: pointer;
        padding: 0 1em;

        &.active {
            color: #2a2a2a;
            text-decoration: underline;
        }

        &.clear {
            color: #c71b1b;

            &:hover {
                color: #c71b1b;
                text-decoration: underline;
            }
        }

        &:first-child {
            padding-left: 0;
        }

        &:hover {
            color: #000;
            text-decoration: underline;
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
    }

    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
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