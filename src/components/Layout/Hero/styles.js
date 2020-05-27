import styled from "styled-components"
import media from "styled-media-query"

export const Hero = styled.section`
    background: ${props => `url(${props.bg})`} no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    grid-area: hero;
    height: 50vh;
    padding: 2em 0;
    z-index: 0;

    .bounce {
        animation-name: bounce;
        animation-timing-function: linear;
    }
    @keyframes bounce {
        0%   { transform: translateY(10em); }
        50%  { transform: translateY(5em); }
        100% { transform: translateY(10em); }
    }
`

export const HeroCopy = styled.article`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;

    h1 {
        color: #ffffff;
        font-size: 3em;
        font-weight: 800;
        line-height: 1.4em;
        margin-bottom: 2em;
        text-align: center;
        width: 50vw;
    }

    ${media.lessThan("medium")`
        h1 {
            font-size: 1.5em;
            width: 90%;
            margin-bottom: 0;
        }
    `}
`

export const Button = styled.button`
    background: #ffffff;
    border: 2px solid transparent;
    border-radius: 50px;
    color: #482992;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    padding: 1.5em 3em;
    transition: all .5s;

    &:hover {
        transform: scale(1.05);
    }
`

export const Astronaut = styled.img`
    animation-duration: 7s;
    animation-iteration-count: infinite;
    bottom: 0;
    position: absolute;
    right: 10em;
    transform-origin: bottom;
    width: 320px;

    ${media.lessThan("medium")`
        display: none;
    `}
`
