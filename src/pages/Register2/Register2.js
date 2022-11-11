import styled from "styled-components"
import { useCallback, useState } from 'react'
import { Layout } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme";
import { TextField } from '../../components/TextField/TextField'
import { BasicButton } from "../../components/Button/BasicButton";
import { useNavigate } from 'react-router-dom'

export const Register2 = () =>{
    const navigate = useNavigate();
    const [values, setValues] = useState({
        photo: '',
	    title: '',
	    category: '',
        date: '',
    })
    const handleChange = useCallback((e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value})
    }, [values])
    const handleLocation = useCallback(() => {
        navigate('/lost')
    }, [navigate])
    return(
        <Layout>
            <Wrapper>
                <Container>
                <TitleContainer>
                    <Title>분실물 접수</Title>
                </TitleContainer>
                <InputContainer>
                    <TextField placeholder='제목을 입력해주세요.' value={values.title} name='title' onChange={handleChange}/>
                    <SelectBox defaultValue={"선택"}>
                        <option value="선택" disabled>잃어버린 장소를 선택해주세요</option>
                        <option value="T동" >T동</option>
                        <option value="R동" >R동</option>
                        <option value="K동" >K동</option>
                        <option value="와우관" >와우관</option>
                        <option value="I동" >I동</option>
                        <option value="A동" >A동</option>
                        <option value="B동" >B동</option>
                        <option value="C동" >C동</option>
                        <option value="D동" >D동</option>
                        <option value="Z2동" >Z2동</option>
                        <option value="Z3동" >Z3동</option>
                        <option value="중앙도서관" >중앙도서관</option>
                        <option value="E동" >E동</option>
                        <option value="S동" >S동</option>
                        <option value="Z1동">Z1동</option>
                    </SelectBox>
                </InputContainer>
                <ContentContainer></ContentContainer>
                <ButtonContainer>
                    <BasicButton title="등록" onClick={handleLocation} width={150} />
                </ButtonContainer>
            </Container>
            </Wrapper>
        </Layout>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 960px;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const TitleContainer = styled.div`
  width: 960px;
  height: 48px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: ${theme.size.font.title2}px;
  color: ${theme.colors.primary};
  font-weight: bold;
`;
const InputContainer = styled.div`
  width: 720px;
`;
const SelectBox = styled.select`
  width: 720px;
  height: 46px;
  & > option:first-child {
    display: none;
  }
  padding-left: 20px;
  font-size: 17px;
  margin-bottom: 15px;
  border-radius: 10px;
`;
const ContentContainer = styled.textarea`
  width: 720px;
  height: 346px;
  resize: none;
  font-size: 14px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;
const ButtonContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-bottom: 50px;
`;
