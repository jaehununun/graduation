import styled from "styled-components";
import { Layout } from "../../components/Layout/Layout"
import user_img from "./user_img.svg"
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme"
import { useRecoilValue } from "recoil";
import { tokenState } from "../../store/session";
import { useGetMyinfo } from "../../hooks/api";
import { useEffect } from "react";
export const Mypage =()=>{
    const location = window.location.pathname;
    const userId= useRecoilValue(tokenState);
    const [req,res] = useGetMyinfo(Number(userId));
    const [myinfo,setMyinfo] = useState({});
    const navigate = useNavigate()

    const handleClick = useCallback((path) => {
        navigate(path)
    }, [navigate])

    useEffect(()=>{
        req(userId)
    },[req, userId])
    useEffect(()=>{
        if(res.called && !res.loading && res.data) {
            setMyinfo({
                email: res.data.result.email,
                name: res.data.result.name,
                phoneNumber: res.data.result.phoneNumber,
                studentNumber: res.data.result.studentNumber
            });
        }
    },[res])
    return(
        <Layout>
            <Container>
                <UserContainer>
                    <img src={user_img} alt="" />
                    <UserInfo> {myinfo.studentNumber} {myinfo.name}님</UserInfo>
                </UserContainer>
                <BasicInfoContainer>
                    <InfoNavContainer>
                        <Button location={location === '/mypage'} onClick={() => handleClick('/mypage')}>기본정보</Button>
                        <Button onClick={() => handleClick('/mypost')} location={location === '/mypost'}>내가 쓴 글</Button>
                    </InfoNavContainer>
                    <MyInfoContainer>
                        <InfoContent>학번 {myinfo.studentNumber}</InfoContent>
                        <InfoContent>이름 {myinfo.name}</InfoContent>
                        <InfoContent>이메일 {myinfo.email}</InfoContent>
                        <InfoContent>전화번호 {myinfo.phoneNumber}</InfoContent>
                    </MyInfoContainer>
                </BasicInfoContainer>
            </Container>
        </Layout>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const UserContainer = styled.div`
    width: 294px;
    height: 71px;
    display: flex;
    align-items: center;
`
const BasicInfoContainer =styled.div`
    width: 958px;
    height: 412px;
`
const InfoNavContainer =styled.div`
    width: 327px;
    height: 48px;
    display: flex;
    align-items: center;
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
    font-size: 20px;
`
const UserInfo = styled.div`
    color: ${theme.colors.gray};
    font-size: ${theme.size.font.title3}px;
    max-width: 150px;
    white-space: normal;
    margin-left: 5px;
    min-height: 30px;
    margin-right: 50px;
`
const MyInfoContainer = styled.div`
    width: 958px;
    height: 300px;
`
const InfoContent = styled.div`
    width: 958px;
    height: 64px;
    font-size: ${theme.size.font.title3}px;
    display: flex;
    margin-top: 10px;
`