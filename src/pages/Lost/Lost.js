import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import register from '../Home/register.svg';
import { Table } from "../../components/Table/Table";
export const Posts = [
    {
        id: 1,
        title: "Galaxy Z Fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
        user:{
                id: 0,
                studentNumber: 'B611044',
                name: '김재훈',
            },
        content: "T동 담배피는 곳에서 주웠습니다."
        },
    {
      id: 2,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
      id: 3,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
      id: 4,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 5,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 6,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 7,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 8,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 9,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 10,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 11,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 12,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 13,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 14,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 15,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 16,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 17,
      title: "z fold 3",
      location: "T동",
      name: "김재훈",
      createdAt: "2022.10.21",
      totalView: 1,
    },
    {
        id: 18,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 19,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 20,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 21,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 22,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 23,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 24,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 25,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 26,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
    {
        id: 27,
        title: "z fold 3",
        location: "T동",
        name: "김재훈",
        createdAt: "2022.10.21",
        totalView: 1,
    },
];
export const Lost =()=> {
    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        navigate('/register2')
    }, [navigate])
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
            <img src={register} alt='' style={{display:'inline-block',float:'right',cursor:'pointer'}} onClick={handleClick}/>
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