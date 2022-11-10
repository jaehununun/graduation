import styled from "styled-components";
import { Layout } from "../../components/Layout/Layout"
import user_img from "./user_img.svg"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import { MypostTable} from "../../components/MypostTable/MypostTable";


export const Mypost =()=>{
    const location = window.location.pathname;
    const navigate = useNavigate()
    const owner ={
            studentNumber : "B611044",
            name : "김재훈",
            email : "ivankim0407@gmail.com",
            phoneNumber : "010-5842-5119"
    }
    const mypost =[
        {
            postType: 0, /* postType === 0 => 찾아가세요 */
            title : "에이동에서 립 주웠어요",
            date: 1665347061618,
            hit: 1     
        },
        {
            postType: 1, /* postType === 1 => 찾아주세요 */
            title : "Galaxy Z flip3 잃어버렸습니다.",
            date: 1665347061619,
            hit:1

        },
        {
            postType: 0,
            title : "LG gram 주웠어요",
            date: 1665347061620,
            hit: 1
        },
        {
            postType: 1,
            title : "에이동에서 립 찾았어요",
            date: 1665347061618,
            hit: 1
        }
        ,
        {
            postType: 0,
            title : "LG gram 주웠어요",
            date: 1665347061620,
            hit: 1 
        },
        {
            postType: 1,
            title : "에이동에서 립 찾았어요",
            date: 1665347061618,
            hit: 1
        }
    ]
    const handleClick = useCallback((path) => {
        navigate(path)
    }, [navigate])

    const handleLocation = useCallback((content) => {
        navigate(`/postlost/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [navigate])
    return(
        <Layout>
            <Container>
                <UserContainer>
                    <img src={user_img} alt="" />
                    <UserInfo> {owner?.studentNumber} {owner?.name}님</UserInfo>
                </UserContainer>
                <BasicInfoContainer>
                    <InfoNavContainer>
                        <Button location={location === '/mypage'} onClick={() => handleClick('/mypage')}>기본정보</Button>
                        <Button onClick={() => handleClick('/mypost')} location={location === '/mypost'}>내가 쓴 글</Button>
                    </InfoNavContainer>
                    <PostContainer>
                        <MyHome>찾아가세요</MyHome>
                        <MypostTable posts={mypost} handleOnClick={handleLocation}></MypostTable>
                    </PostContainer>
                    <PostContainer>
                        <MyHome>찾아주세요</MyHome>
                        <MypostTable posts={mypost} handleOnClick={handleLocation}></MypostTable>
                    </PostContainer>
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
const PostContainer =styled.div`
    width: 960px;
    height: 200px;
    display: flex;
`
const MyHome =styled.div`
    width: 128px;
    height: 200px;
    font-size: ${theme.size.font.title3}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    color: ${theme.colors.gray};
`