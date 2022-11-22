import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { BasicButton } from '../../components/Button/BasicButton'
import { TextField } from '../../components/TextField/TextField'
import { useLogin } from '../../hooks/session'
import { tokenState } from '../../store/session'
import { theme } from '../../styles/theme'
import logo from './login_logo.svg'
import title_img from './login_title.svg'

export const Login = () => {
    const [values, setValues] = useState({
        id: '',
        password: '',
    })
    const navigate = useNavigate();
    const setTokenState = useSetRecoilState(tokenState)
    const [req, res] = useLogin();

    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value})
    }, [values])

    const handleLocation = useCallback(() => {
        navigate('/signup')
    }, [navigate])

    const handleLogin = useCallback(() => {
        req(values.id, values.password)
    }, [req, values.id, values.password])

    useEffect(() => {
        if (res.data && !res.loading && res.called) {
            if (res.data.isSuccess) {
                setTokenState(res.data.result.userId)
                navigate('/');
            }
            else {
                alert(res.data.message)
            }
        }
    }, [navigate, res.called, res.data, res.loading, setTokenState])

    const handleEnter = useCallback((e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }, [handleLogin])

    return (
        <Container>
            <img src={logo} alt=''/>
            <TextContainer>
                <InputContainer>
                    <img src={title_img} alt=''/>
                    <LoginContainer>
                        <TextField label='아이디' placeholder='전화번호, 사용자의 이메일 또는 학번' value={values.id} name='id' onChange={handleChange}/>
                    </LoginContainer>
                    <LoginContainer>
                    <TextField label='비밀번호' placeholder='비밀번호를 입력하세요' value={values.password} name='password' onChange={handleChange} handleEnter={handleEnter} type='password'/>
                    </LoginContainer>    
                    <BasicButton title='로그인' onClick={handleLogin}/>
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
    flex-direction: column;
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
const LoginContainer = styled.div`
    width: 387px;
`