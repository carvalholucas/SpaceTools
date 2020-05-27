import styled from 'styled-components'
import media from 'styled-media-query'

export const Description = styled.section`
    align-items: center;
    display: flex;
    min-height: 100vh;
    max-height: 100%;
    justify-content: center;
`

export const Content = styled.article`
    width: 50vw;

    ${media.lessThan("medium")`
        width: 80%;
    `}

    h2 {
        color: #2a2a2a;
        font-size: 1.2em;
        font-weight: 700;
        line-height: 1.5em;
        margin-bottom: 2em;
        text-align: center;
    }

    p { 
        color: #616161;
        font-weight: 300;
        line-height: 1.5em;
        text-align: justify;

        span {
        
        }
    }
`