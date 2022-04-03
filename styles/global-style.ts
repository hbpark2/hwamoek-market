import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
     ${reset}
    :focus {
        outline: none;
        /* border: none; */
    }

    ::-webkit-scrollbar {
        display: none;
    }

    html{
        font-size: 62.5%;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ${media.tablet}{
            font-size: 62.5%;
        }
    }

    body{
      font-size: 62.5%;
      color:#333;
      background-color: #fffef2;
    }

    #__next{
      font-size: 1.6rem;
      ${media.tablet}{
        font-size:1.4rem;
      }
    }
    
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
