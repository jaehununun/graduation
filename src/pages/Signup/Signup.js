import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BasicButton } from "../../components/Button/BasicButton"
import { TextField } from "../../components/TextField/TextField"
import { theme } from "../../styles/theme"
import { checkPassValidation, emailValidation, phoneValidation } from "../../utils/checkValidation"
import title_img from '../Login/login_title.svg'

export const Signup = () => {
    const [values, setValues] = useState({
        studentNumber: null,
        name: '',
        email: '',
        phone: '',
        password: '',
        checkPass: '',
    })
    const [errors, setErrors] = useState({
        email: '',
        phone: '',
        checkPass: '',
    })
    const navigate = useNavigate()

    const handleLocation = useCallback(() => {
        navigate('/')
    }, [navigate])

    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'email') {
            setErrors({...errors, email: emailValidation(value)})
        } else if (name === 'phone') {
            setErrors({...errors, phone: phoneValidation(value)})
        } else if (name === 'checkPass') {
            setErrors({...errors, checkPass: checkPassValidation(values.password, value)})
        }
        
        setValues({...values, [name]: value})
    }, [errors, values])

    return (
        <TextContainer>
            <InputContainer>
                <img src={title_img} alt='' style={{marginBottom: '30px'}}/>
                <BasicButton title='학교이메일 인증하기' onClick={() => {}}/>
            </InputContainer>
            <InputContainer style={{paddingTop: '20px'}}>
                <InforContainer>
                    <TextField name='studentNumber' label='학번' placeholder='학번을 입력하세요' onChange={handleChange} value={values.studentNumber}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='name' label='이름' placeholder='이름을 입력하세요' onChange={handleChange} value={values.name}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='email' label='이메일' placeholder='이메일을 입력하세요' onChange={handleChange} value={values.email} error={errors.email}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='phone' label='전화번호' placeholder='전화번호를 입력하세요 ( "-" 제외 )' onChange={handleChange} value={values.phone} error={errors.phone}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='password' label='비밀번호' type='password' placeholder='비밀번호를 입력하세요' onChange={handleChange} value={values.password}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='checkPass' label='비밀번호 확인' type='password' placeholder='비밀번호를 입력하세요' onChange={handleChange} value={values.checkPass} error={errors.checkPass}/>
                </InforContainer>
                <div style={{height: '20px'}}/>
                <BasicButton title='가입하기' onClick={() => {}}/>
            </InputContainer>
            <InputContainer>
                <div style={{paddingBottom: '30px'}}>
                    계정이 있으신가요? <span style={{color: theme.colors.primary, padding: '5px', cursor:'pointer'}} onClick={handleLocation}>로그인하기</span>
                </div>
            </InputContainer>
        </TextContainer>
    )
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
    padding: 50px 0 0 0;
    align-items: center;
    justify-content: space-around;
`
const InforContainer = styled.div`
    width: 387px;
`
