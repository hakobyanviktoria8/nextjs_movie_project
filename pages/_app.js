import '../styles/globals.css';
import Header from "../components/Header";
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
// import {ThemeProvider} from "emotion-theming";

function MyApp({Component, pageProps}) {
    const theme ={
      colors:{
          primary:"#ff0000"
      }
    };
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
