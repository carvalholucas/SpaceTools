import styled from 'styled-components'
import media from "styled-media-query"

export const Wrapper = styled.main`
    display: grid;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    grid-template-columns: 5em 1fr 5em;
    grid-template-rows: 5em auto auto 15em 4em;
    grid-template-areas:
        "header header header"
        "hero hero hero"
        "main main main"
        "subfooter subfooter subfooter"
        "footer footer footer";

    ${({ hasHero }) => hasHero && `
        grid-template-rows: auto auto 15em 4em;
        grid-template-areas:
            "hero hero hero"
            ". main ."
            "subfooter subfooter subfooter"
            "footer footer footer";
    `}

    ${media.lessThan("medium")`
        grid-template-columns: 2em 1fr 2em;
        grid-template-rows: 5em auto auto 4em;
        grid-template-areas:
        "header header header"
        "hero hero hero"
        "main main main"
        "footer footer footer";

        ${({ hasHero }) => hasHero && `
            grid-template-rows: auto auto 4em;
            grid-template-areas:
            "hero hero hero"
            ". main ."
            "footer footer footer";
        `}
    `}
`

export const Main = styled.main`
    grid-area: main;
    min-height: 100vh;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(${props => props.height || "100vh"} - 7em);

    ${media.lessThan("medium")`
        height: 100%;
    `}
`

export const Desc = styled.section`
    color: #211d67;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 5em;
    text-align: center;

    ${media.lessThan("medium")`
        align-items: center;
        padding: 2em 1em;
    `}

    h1 {
        font-size: 2em;
        font-weight: 700;

        ${media.lessThan("medium")`
            font-size: 1.2em;
        `}
    }

    p {
        font-weight: 300;
        margin-top: 2em;
        width: 100%;
    }
`

export const Card = styled.article`
    align-self: center;
    background: #fff;
    width: 60vw;

    ${media.between("medium", "large")`
        width: 100%;
    `}    

    ${media.lessThan("medium")`
        width: 100%;
    `}
`

export const Button = styled.button`
    background: rgba(72, 41, 146, 0.2);
    border-radius: 25px;
    border: none;
    color: #482992;
    cursor: pointer;
    font-size: .8em;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-right: 1em;
    outline: 0;
    padding: 1em 1.5em;

    &:hover, 
    &.active {
        background: #482992;
        color: #ffffff;
    }

    &.copy {
        background: #ffffff;
        border: 1px solid #141414;
        color: #141414;
        cursor: pointer;
        margin-right: 0;

        &:hover {
            background: rgba(42, 42, 42, 0.2);
            border: 1px solid rgba(42, 42, 42, 0.2);
            text-decoration: none;
        }
    }

    &.clear {
        background: #ffffff;
        border: 1px solid #c71b1b;
        color: #c71b1b;

        &:hover {
            background:  rgba(199, 27, 27, 0.2);
            border: 1px solid rgba(199, 27, 27, 0.2);
            text-decoration: none;
        }
    }

    ${media.lessThan("medium")`
        border: 1px solid #e6e6e6;
        cursor: pointer;
        margin-bottom: 1em;
        margin-right: 0;
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