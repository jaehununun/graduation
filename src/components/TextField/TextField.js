import { useRef } from "react"
import styled from "styled-components"
import { theme } from "../../styles/theme"

export const TextField = ({label, value, onChange, placeholder, name, type, error, handleEnter}) => {
    const ref = useRef(null)
    return (
        <Container label={label}>
            <InputBox label={label} ref={ref} value={value} onChange={(e) => onChange(e)} required placeholder={placeholder} name={name} type={type ? type : 'text'} onKeyDown={(e) => handleEnter(e)}/>
            {label && <InputTitle onClick={() => ref.current.focus()}>{label}</InputTitle>}
            {error && <Warnning>{error}</Warnning>}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    position: ${({ label }) => label && "relative"};
    margin: 15px 0;
`

const InputTitle = styled.span`
    position: absolute;
    top: 18px;
    left: 20px;
    font-size: 17px;
    transition: 0.3s;
    background-color: white;
    padding: 0 5px;
`

const InputBox = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
    font-size: 17px;
    background-color: white;
    padding-left: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 0.5px solid ${theme.colors.primaryLight};
    &:focus {
        border: 2px solid ${theme.colors.primary};
    }
    &:focus ~ span,
    &:valid ~ span {
        top: -5px;
        font-size: 14px;
        color: ${theme.colors.primary};
    }
    ::placeholder {
    color: ${({ label }) => label && "white"};
    }
    &:focus::placeholder {
        color: gray;
    }
`

const Warnning = styled.div`
    color: red;
    padding: 5px 0 0 10px;
    font-size: 12px;
`