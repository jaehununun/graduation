import { Header } from "../Header/Header"
import { Nav } from "../Nav/Nav"

export const Layout = ({children}) => {

    return (
        <>
            <Header/>
            <Nav />
            <div style={{height: '150px'}}/>
            {children}
        </>
    )
}