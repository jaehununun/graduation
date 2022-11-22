import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import campusMap from "../Location/campusmap.svg"
import { theme } from "../../styles/theme";
import { useGetLocation } from "../../hooks/api"
import { useEffect } from "react"
import { useState } from "react"
const buildingInfo=[
    {
        buildingNum: 0,
        buildingPost: 3,
    },
    {
        buildingNum: 1,
        buildingPost: 4,
    },
    {
        buildingNum: 2,
        buildingPost: 5,
    },
    {
        buildingNum: 3,
        buildingPost: 6,
    },
    {
        buildingNum: 4,
        buildingPost: 7,
    },
    {
        buildingNum: 5,
        buildingPost: 8,
    },
    {
        buildingNum: 6,
        buildingPost: 1,
    },
    {
        buildingNum: 7,
        buildingPost: 2,
    },
    {
        buildingNum: 8,
        buildingPost: 10,
    },
    {
        buildingNum: 9,
        buildingPost: 4,
    },
    {
        buildingNum: 10,
        buildingPost: 2,
    },
    {
        buildingNum: 11,
        buildingPost: 7,
    },
    {
        buildingNum: 12,
        buildingPost: 5,
    },
    {
        buildingNum: 13,
        buildingPost: 3,
    },
]
export const Location =()=>{
    const navigate= useNavigate()
    const handleClick = useCallback((location)=>{
        navigate(`/locationresult/${location}`,{state:{location}})
    },[navigate])
    const [req,res]=useGetLocation();
    // console.log(res)
    useEffect(()=>{
        req()
    },[req])
    const [buildings,setBuildings]= useState([])
    useEffect(()=>{
        if(res.called && res.loading && res.data){
            const arr = []
            res.data.result.forEach((el)=>{
                arr.push({
                    buildingName: el.location,
                    buildingPost: el.count
                })
            })
            setBuildings(arr)
        }
    },[res])
    // useEffect(()=>{
    //     console.log(res)
    //     if(res.called && !res.loading && res.data){
            
    // },[res])
    return (
        <Layout>
            <Container>
                <CampusMapContainer>
                    <CampusImg src={campusMap} alt=''></CampusImg>
                    <BuildingIcon top={-180} left={100} onClick={()=>handleClick(buildingInfo[0].buildingNum)}>{buildings.buildingName}: {buildings.buildingPost}</BuildingIcon>
                    <BuildingIcon top={-190} left={-260} onClick={()=>handleClick(buildingInfo[1].buildingNum)}>R동: {buildingInfo[1].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-350} left={-230} onClick={()=>handleClick(buildingInfo[2].buildingNum)}>K동: {buildingInfo[2].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-420} left={-170} onClick={()=>handleClick(buildingInfo[3].buildingNum)}>와우관: {buildingInfo[3].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-530} left={-180} onClick={()=>handleClick(buildingInfo[4].buildingNum)}>I동: {buildingInfo[4].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-500} left={100} onClick={()=>handleClick(buildingInfo[5].buildingNum)}>A동: {buildingInfo[5].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-580} left={50} onClick={()=>handleClick(buildingInfo[6].buildingNum)}>B동: {buildingInfo[6].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-650} left={110} onClick={()=>handleClick(buildingInfo[7].buildingNum)}>C동: {buildingInfo[7].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-690} left={180} onClick={()=>handleClick(buildingInfo[8].buildingNum)}>D동: {buildingInfo[8].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-650} left={0} onClick={()=>handleClick(buildingInfo[9].buildingNum)}>Z1동: {buildingInfo[9].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-695} left={125} onClick={()=>handleClick(buildingInfo[10].buildingNum)}>Z2동: {buildingInfo[10].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-800} left={-100} onClick={()=>handleClick(buildingInfo[11].buildingNum)}>중앙도서관: {buildingInfo[11].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-870} left={0} onClick={()=>handleClick(buildingInfo[12].buildingNum)}>E동: {buildingInfo[12].buildingPost}</BuildingIcon>
                    <BuildingIcon top={-830} left={55} onClick={()=>handleClick(buildingInfo[13].buildingNum)}>S동: {buildingInfo[13].buildingPost}</BuildingIcon>
                </CampusMapContainer>
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
const CampusMapContainer = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CampusImg = styled.img`
`;
const BuildingIcon = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border: 1px solid ${theme.colors.primaryLight};
  cursor: pointer;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #dbdbdb;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  &:hover {
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.primaryLight};
  }
  font-size: ${theme.size.font.body1}px;
`;
