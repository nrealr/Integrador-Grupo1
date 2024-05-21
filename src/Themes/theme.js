import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#102C5B',
            light: '#7694C7',
        },
        secondary: {
            main: '#1BB275',
            light: '#61C0BB',
        },
        background1: {
            main: '#ffffff'
        },
        background2: {
            main: '#D9D9D9',
            light: '#F1F1F1',
        }
    },
});