import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { theme } from "../../styles/theme"

export const Nav = () => {
    const location = window.location.pathname;
    const navigate = useNavigate()

    const handleClick = useCallback((path) => {
        navigate(path)
    }, [navigate])

    return (
        <Container>
            <ButtonBox>
                <Button location={location === '/'} onClick={() => handleClick('/')}>찾아가세요</Button>
                <Button onClick={() => handleClick('/lost')} location={location === '/lost'}>찾아주세요</Button>
                <Button onClick={() => handleClick('/location')} location={location === '/location'}>한 눈에 보기</Button>
            </ButtonBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 70px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0,0,0,0.15) 0 10px 10px -5px;
`

const ButtonBox = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({location}) => location ? theme.colors.primary : theme.colors.gray};
    cursor: pointer;
    width: 250px;
    height: 40px;
    border-bottom: 2px solid ${({location}) => location ? theme.colors.primary : 'white'};
`