import { createGlobalStyle } from "styled-components";


export const lightTheme = {
    body: '#F2F2F2',
    fontColor: '#1B1B2F'
};

export const darkTheme = {
    body: '#1B1B2F',
    fontColor: '#FFFFFF'
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
        color: ${props => props.theme.fontColor};
        transition: var(--transition);
    }


`;