import { Layout } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme"
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useGetBuildingPosts } from "../../hooks/api";
import { LocationLostTable } from "../../components/LocationLostTable/LocationLostTable";
import { LocationFoundTable } from "../../components/LocationFoundTable/LocationFoundTable";
export const LocationResult =()=>{
    const navigate = useNavigate()
    const handleLocation = useCallback((content) => {
        navigate(`/postlost/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [navigate])
    const handleLocation2 = useCallback((content) => {
        navigate(`/post/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [navigate])
    const state = useLocation()
    const [locationlostpost,setLocationlostpost]=useState([])
    const [locationfoundpost,setLocationfoundpost]=useState([])
    const {location}=state.state
    const [req,res]=useGetBuildingPosts(location);
    useEffect(()=>{
        req(location)
    },[req,location])

    useEffect(()=>{
        if(res.called && !res.loading && res.data){
            const arr = []
            res.data.result.forEach((el)=>{
                arr.push(({
                    date: el.date,
                    hit: el.hit,
                    location: el.location,
                    id: el.lostId,
                    lostTitle: el.lostTitle,
                    userNickname: el.userNickname
                }))
            })
            setLocationlostpost(arr)

            const arr2 =[]
            res.data.comments.forEach((el)=>{
                arr2.push(({
                    date: el.date,
                    viewNum: el.viewNum,
                    location: el.location,
                    id: el.foundId,
                    title: el.title,
                    userNickname: el.userNickname
                }))
            })
            setLocationfoundpost(arr2)
        }
    },[res])
    return(
        <Layout>
            <Wrapper>
                <Container>
                    <TitleContainer>
                        <Title>{location}</Title>
                    </TitleContainer>
                    <TableContainer>
                        <PostType>찾아주세요</PostType>
                        <LocationLostTable posts={locationlostpost} handleOnClick={handleLocation}></LocationLostTable>
                    </TableContainer>
                    <TableContainer>
                        <PostType>찾아가세요</PostType>
                        <LocationFoundTable posts={locationfoundpost} handleOnClick={handleLocation2}></LocationFoundTable>
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