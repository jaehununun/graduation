// import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BasicButton } from "../../components/Button/BasicButton"
import { TextField } from "../../components/TextField/TextField"
import { useSignup } from "../../hooks/session"
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
    const [req, res] = useSignup();

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

    const handleSubmit = useCallback(() => {
        req({
            studentNumber: values.studentNumber,
            userEmail: values.email,
            userName: values.name,
            userNickname: values.name,
            password: values.password,
            phoneNumber: values.phone
        })
    }, [req, values.email, values.name, values.password, values.phone, values.studentNumber])

    useEffect(() => {
        if (!res.loading && res.data && res.called) {
            alert('??????????????? ?????????????????????!')
            navigate('/login')
        }
    }, [res, navigate])

    return (
        <TextContainer>
            <InputContainer>
                <img src={title_img} alt='' style={{marginBottom: '30px'}}/>
                <BasicButton title='??????????????? ????????????' onClick={() => {}}/>
            </InputContainer>
            <InputContainer style={{paddingTop: '20px'}}>
                <InforContainer>
                    <TextField name='studentNumber' label='??????' placeholder='????????? ???????????????' onChange={handleChange} value={values.studentNumber}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='name' label='??????' placeholder='????????? ???????????????' onChange={handleChange} value={values.name}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='email' label='?????????' placeholder='???????????? ???????????????' onChange={handleChange} value={values.email} error={errors.email}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='phone' label='????????????' placeholder='??????????????? ??????????????? ( "-" ?????? )' onChange={handleChange} value={values.phone} error={errors.phone}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='password' label='????????????' type='password' placeholder='??????????????? ???????????????' onChange={handleChange} value={values.password}/>
                </InforContainer>
                <InforContainer>
                    <TextField name='checkPass' label='???????????? ??????' type='password' placeholder='??????????????? ???????????????' onChange={handleChange} value={values.checkPass} error={errors.checkPass}/>
                </InforContainer>
                <div style={{height: '20px'}}/>
                <BasicButton title='????????????' onClick={handleSubmit}/>
            </InputContainer>
            <InputContainer>
                <div style={{paddingBottom: '30px'}}>
                    ????????? ???????????????? <span style={{color: theme.colors.primary, padding: '5px', cursor:'pointer'}} onClick={handleLocation}>???????????????</span>
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
