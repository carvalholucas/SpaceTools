import styled from 'styled-components'
import media from "styled-media-query"

export const Wrapper = styled.main`
    display: grid;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    grid-template-columns: 5em 1fr 5em;
    grid-template-rows: ${props => props.hasHero ? 
        "auto auto 15em 4em" : 
        "6em auto auto 15em 4em"};
    grid-template-areas:
        "header header header"
        "hero hero hero"
        "main main main"
        "subfooter subfooter subfooter"
        "footer footer footer";

    ${({ hasHero }) => hasHero && `
        grid-template-areas:
            "hero hero hero"
            ". main ."
            "subfooter subfooter subfooter"
            "footer footer footer";
    `}

    ${media.lessThan("medium")`
        grid-template-columns: 2em 1fr 2em;
        grid-template-rows: 6em calc(100% - 4em) 4em;
    `}
`

export const Main = styled.main`
    grid-area: main;
    min-height: 100vh;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(${props => props.height || "100vh"} - 4em);
`

export const Desc = styled.section`
    background: linear-gradient(to bottom, #482992 5%, transparent), ${props => `url(${props.bg})`} no-repeat;
    background-size: cover;
    background-position: center center;
    color: #ffffff;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 5em;
    text-align: center;

    h1 {
        font-size: 2em;
        font-weight: 700;
    }

    p {
        font-weight: 300;
        margin-top: 2em;
        width: 100%;

        ${media.lessThan("medium")`
            width: 90%;
        `}
    }
`

export const Card = styled.article`
    align-self: center;
    background: #fff;
    width: 50vw;
    transform: translateY(-3em);

    ${media.between("medium", "large")`
        width: 100%;
    `}    

    ${media.lessThan("medium")`
        width: 100%;
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

    &.copy {
        background: #2a2a2a;
        color: #fff;
        cursor: pointer;
        padding: .8em;

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