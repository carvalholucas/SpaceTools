import styled from 'styled-components'

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
    }

    p {
        color: #969696;
        font-weight: 300;
        line-height: 1.5em;
        margin-top: 2em;
        text-align: center;
        width: 70%;
    }
`

export const Card = styled.article`
    background: #fff;
    width: 50vw;
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
`

export const Actions = styled.div`
    span {
        color: #969696;
        cursor: pointer;
        padding: 0 1em;

        &:first-child {
            padding-left: 0;
        }

        &:hover {
            color: #000;
            text-decoration: underline;
        }
    }
`

export const TextArea = styled.textarea`
    border: none;
    color: #2a2a2a;
    font-size: 1.2em;
    outline: 0;
    padding: 2em;
    resize: none;
    text-transform: ${props => props.type || 'initial'};
    width: 100%;

    ::placeholder {
        color: #d9d9d9;
        font-weight: 300;
    }
`