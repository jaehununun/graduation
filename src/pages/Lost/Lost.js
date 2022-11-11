import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Table } from "../../components/Table/Table";
export const Posts = [
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
        location: "R동",
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
        location: "S동",
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
        location: "K동",
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
export const Lost =()=> {
    const navigate = useNavigate()
    const handleLocation = useCallback((content) => {
        navigate(`/postlost/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [navigate])
    return (
        <Layout>
            <Container>
                <PostContainer>
                    <Table posts={Posts} handleOnClick={handleLocation}/>
                </PostContainer>
            </Container>
        </Layout>
    )
}
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const PostContainer = styled.div`
    width: 1037px;
    height: 675px;
`