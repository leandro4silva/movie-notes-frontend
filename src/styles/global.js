import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    ul {
        list-style: none;
    }

    body{
        font-size: 1.6rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.PINK}; 
  border-radius: 0.8rem ;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.PINK_100}; 
}
`