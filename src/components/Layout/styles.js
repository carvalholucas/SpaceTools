import styled from 'styled-components'
import media from "styled-media-query"

export const Wrapper = styled.main`
    display: grid;
    font-family: 'Poppins', sans-serif;
    grid-template-columns: 5em 1fr 5em;
    grid-template-rows: 4em calc(100vh - 4em) 4em;
    grid-template-areas:
        "header header header"
        ". main ."
        "footer footer footer";

    ${media.lessThan("medium")`
        grid-template-columns: 2em 1fr 2em;
        grid-template-rows: 6em calc(100% - 4em) 4em;
    `}
`