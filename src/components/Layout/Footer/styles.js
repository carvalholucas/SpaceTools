import styled from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
    align-items: center;
    color: #616161;
    display: flex;
    font-size: .8em;
    grid-area: footer;
    justify-content: center;
    padding: 0 6em;

    ${media.lessThan("medium")`
        padding: 0 2em;
    `}
`