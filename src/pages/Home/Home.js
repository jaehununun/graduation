import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { LostCard } from "../../components/LostCard/LostCard"
import { useGetFound } from "../../hooks/api"
import { dummy } from "./data"
export const Home = () => {
    const [req,res] = useGetFound();
    useEffect(()=>{
        req()
    },[req])

    const [posts, setPosts]=useState([])

    useEffect(()=>{
        if(res.called && !res.loading && res.data){
            console.log(res)
            const arr = []
            res.data.result.forEach((el)=>{
                arr.push({
                    id: el.foundId,
                    title: el.title,
                    location: el.location,
                    totalView: el.hit,
                    name: el.userNickname,
                    src: el.url
                })
            })
            setPosts(arr)
        }
    },[res])
    return (
        <Layout>
            <Container>
                <GridContainer>
                    {posts.map((el) => (
                        <LostCard key={el.id} content={el}/>
                    ))}
                </GridContainer>
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

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
`