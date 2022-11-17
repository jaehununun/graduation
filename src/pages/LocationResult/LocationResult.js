import { Layout } from "../../components/Layout/Layout"
import { LocationTable } from "../../components/LocationTable/LocationTable"
import { theme } from "../../styles/theme"
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styled from "styled-components";
import { Table } from "../../components/Table/Table"
export const lostPosts = [
    {
        id: 1,
        title: "Galaxy Z Fold 3 찾아주세요",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 10,
        user:{
                id: 0,
                studentNumber: 'B611044',
                name: '김재훈',
            },
        content: "T동에서 잃어 버렸습니다. 찾아주세요 ㅠㅠㅜ"
    },
    {
        id: 2,
        title: "갤럭시 워치 4 찾아주세요 ㅜㅜ",
        location: "T동",
        name: "유송경",
        createdAt: "2022.9.21",
        totalView: 5,
        user:{
            id: 1,
            studentNumber: 'B911144',
            name: '유송경',
        },
        content: "R동에서 잃어 버렸습니다. 찾아주세요 ㅠㅠㅜ"
    },
    {
        id: 3,
        title: "아이폰13pro잃어버렸습니다.........",
        location: "T동",
        name: "유병익",
        createdAt: "2022.11.09",
        totalView: 7,
        user:{
                id: 2,
                studentNumber: 'B811044',
                name: '유병익',
            },
        content: "S동에서 잃어 버렸습니다. 찾아주세요 ㅠㅠㅜ"
    },
    {
        id: 4,
        title: "에어팟프로가..ㅠ.ㅠ",
        location: "T동",
        name: "송유경",
        createdAt: "2022.8.21",
        totalView: 23,
        user:{
            id: 3,
            studentNumber: 'B911044',
            name: '송유경',
        },
        content: "K동에서 잃어 버렸네요......ㅜ"
    },
    
];
export const foundPosts = [
    {
        id: 0,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030838638860316702/unknown.png',
        title: 'Galaxy Z Fold 3',
        location: 'T동',
        totalView: 10,
        totalComment: 3,
        user: {
            id: 0,
            studentNumber: 'B611044',
            name: '김재훈',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665847061618,
    },
    {
        id: 1,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030839323496546424/unknown.png',
        title: 'LG 그램',
        location: 'R동',
        totalView: 10,
        totalComment: 3,
        user: {
            id: 1,
            studentNumber: 'B611024',
            name: '송유경',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665347061618,
    },
    {
        id: 3,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030839603743178792/unknown.png',
        title: '갤럭시 버즈2',
        location: 'S동',
        totalView: 15,
        totalComment: 5,
        user: {
            id: 3,
            studentNumber: 'B614044',
            name: '유병익',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665847051618,
    },
    {
        id: 4,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030839904898404462/unknown.png',
        title: '에어팟 프로',
        location: 'Z동',
        totalView: 20,
        totalComment: 10,
        user: {
            id: 1,
            studentNumber: 'B611024',
            name: '송유경',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665847061618,
    },
    {
        id: 5,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030840179658866718/unknown.png',
        title: '아이패드 프로',
        location: 'K동',
        totalView: 30,
        totalComment: 20,
        user: {
            id: 1,
            studentNumber: 'B611024',
            name: '송유경',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665847061618,
    },
    {
        id: 6,
        src: 'https://cdn.discordapp.com/attachments/967432482163154955/1030840488028283100/unknown.png',
        title: '아이폰 13Pro',
        location: 'T동',
        totalView: 10,
        totalComment: 3,
        user: {
            id: 1,
            studentNumber: 'B611024',
            name: '송유경',
        },
        content: {
            foundAddr: 'T동',
            keepAddr: 'T동 3층 경비실',
            kind: '휴대전화',
            brand: '삼성',
            color: '검정',
            etc: 'T동 3층 열람실 휴게실에서 주워서 경비실에 맡겨놓았습니다 오후 3시쯤에 주운거 같아요'
        },
        createdAt: 1665847061618,
    },
]
const buildingName=[
    "T동","R동","K동","와우관","I동","A동","B동","C동","D동","Z1동","Z2동","중앙도서관","E동","S동"
]
export const LocationResult =()=>{
    const navigate = useNavigate()
    const handleLocation = useCallback((content) => {
        navigate(`/postlost/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [navigate])
    const state = useLocation()
    const {location}=state.state
    return(
        <Layout>
            <Wrapper>
                <Container>
                    <TitleContainer>
                        <Title>{buildingName[location]}</Title>
                    </TitleContainer>
                    <TableContainer>
                        <PostType>찾아주세요</PostType>
                        <Table posts={lostPosts} handleOnClick={handleLocation}></Table>
                    </TableContainer>
                    <TableContainer>
                        <PostType>찾아가세요</PostType>
                        <LocationTable posts={foundPosts} handleOnClick={handleLocation}></LocationTable>
                    </TableContainer>
                </Container>
            </Wrapper>
        </Layout>
    )
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
const TableContainer= styled.div`
    width: 850px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const PostType =styled.div`
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