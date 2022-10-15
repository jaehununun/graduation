import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BasicButton } from '../../components/Button/BasicButton'
import { TextField } from '../../components/TextField/TextField'
import { theme } from '../../styles/theme'
import logo from './login_logo.svg'
import title_img from './login_title.svg'

export const Login = () => {
    const [values, setValues] = useState({
        id: '',
        password: '',
    })
    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value})
    }, [values])

    const handleLocation = useCallback(() => {
        navigate('/signup')
    }, [navigate])

    return (
        <Container>
            <img src={logo} alt=''/>
            <TextContainer>
                <InputContainer>
                    <img src={title_img} alt=''/>
                    <TextField label='아이디' placeholder='전화번호, 사용자의 이메일 또는 학번' value={values.id} name='id' onChange={handleChange}/>
                    <TextField label='비밀번호' placeholder='비밀번호를 입력하세요' value={values.password} name='password' onChange={handleChange} type='password'/>
                    <BasicButton title='로그인' onClick={() => {}}/>
                    <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
                </InputContainer>
                <InputContainer>
                    <div>
                    계정이 없으신가요? <span style={{color: theme.colors.primary, padding: '5px', cursor:'pointer'}} onClick={handleLocation}>가입하기</span>
                    </div>
                </InputContainer>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
    padding: 50px 0;
    align-items: center;
    justify-content: space-around;
`

const FindPassword = styled.div`
    color: ${theme.colors.black};
    font-size: ${theme.size.title2};
    font-weight: bold;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    margin: 30px 0;
    padding: 10px;
`