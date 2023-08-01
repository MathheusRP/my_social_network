import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700&display=swap');

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;

        &::-webkit-scrollbar{
            background-color: transparent;
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color1);
            border-radius: 5px;
        }
    }

    button {
        cursor: pointer;
        border: none;
    }

    h1, h2, h3, h4, p, button, b, a, span {
        font-family: 'Inter', sans-serif;
        font-family: 'Inter Tight', sans-serif;
    }

    li, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    :root {
        --color1: #413B59;
        --color2: #37353F;


        --grey_0: #242424;
        --grey_1: #616161;
        --grey_2: #DBDBDB;
        --grey_3: #F3F3F3;
        --red: #C44646;
        --green: #48C446;
    }

`