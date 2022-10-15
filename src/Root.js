import { BrowserRouter } from "react-router-dom"
import {RecoilRoot} from 'recoil'
import { ThemeProvider } from "styled-components"
import App from "./App"
import { theme } from "./styles/theme"

const Root = () => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default Root