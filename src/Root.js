import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import { theme } from "./styles/theme"

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Root