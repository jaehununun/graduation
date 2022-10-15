import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BasicButton = ({title, onClick, width=387, disabled}) => {
    return (
        <Container disabled={disabled} width={width} onClick={onClick}>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({disabled}) => disabled ? theme.colors.primaryLight : theme.colors.primary};
    width:  ${({width}) => width}px;
    height: 50px;
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    color: ${theme.colors.letter};
    font-size: ${theme.size.font.title2}px;
    font-weight: bold;
`