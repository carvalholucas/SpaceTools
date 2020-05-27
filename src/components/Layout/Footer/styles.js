import styled from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
    align-items: center;
    color: #616161;
    display: flex;
    font-size: .8em;
    grid-area: footer;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 6em;

    ${media.lessThan("medium")`
        padding: 0 2em;
        text-align: center;
    `}
`

export const SubFooter = styled.div`
    background: ${props => `url(${props.bg})`} no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    grid-area: subfooter;
    padding: 1em 15em;
    position: relative;

    h2 {
        color: #ffffff;
        font-size: 1.7em;
        font-weight: 500;
        line-height: 1.5em;
        margin-bottom: 1em;
    }

    .bounce-footer {
        animation-name: bounce-footer;
        animation-timing-function: linear;
    }
    @keyframes bounce-footer {
        0%   { transform: translateY(-2em); }
        50%  { transform: translateY(0); }
        100% { transform: translateY(-2em); }
    }

    ${media.lessThan("medium")`
        display: none;
    `}
` 

export const Call = styled.article`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
`

export const Action = styled.button`
    background: #ffffff;
    border: none;
    border-radius: 50px;
    color: #482992;
    cursor: pointer;
    font-size: .8em;
    outline: 0;
    padding: 1em 2em;
`

export const Astronaut = styled.img`
    animation-duration: 7s;
    animation-iteration-count: infinite;
    right: 15em;
    position: absolute;
    top: -2em;
    transform-origin: bottom;
    width: 190px;
`