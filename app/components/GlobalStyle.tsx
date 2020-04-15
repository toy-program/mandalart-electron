import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {COLORS} from "@/constants";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        color: ${COLORS.LINE_GRAY};
        background-color: ${COLORS.BACKGROUND_BLACK};
    }
`;

export default GlobalStyles;
