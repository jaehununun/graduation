import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import campusMap from "../Location/campusmap.svg"
import { theme } from "../../styles/theme";
import { useGetLocation } from "../../hooks/api"
import { useEffect } from "react"
import { useState } from "react"

export const Location =()=>{
    const navigate= useNavigate()
    const handleClick = useCallback((location)=>{
        navigate(`/locationresult/${location}`,{state:{location}})
    },[navigate])
    const [req,res]=useGetLocation();
    useEffect(()=>{
        req()
    },[req])
    const [buildings,setBuildings]= useState({})
    useEffect(()=>{
        if(res.called && !res.loading && res.data){
            const arr = {}
            res.data.result.forEach((el)=>{
                arr[el.location]=el.count
            })
            res.data.comments.forEach((el)=>{
                if(arr[el.location]){
                    arr[el.location]+=el.count
                }else{
                    arr[el.location]=el.count
                }
            })
            setBuildings(arr)
        }
    },[res])
    return (
        <Layout>
            <Container>
                <CampusMapContainer>
                    <CampusImg src={campusMap} alt=''></CampusImg>
                    <BuildingIcon top={-180} left={100} onClick={()=>handleClick('T동')}>T동: {buildings['T동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-190} left={-260} onClick={()=>handleClick('R동')}>R동: {buildings['R동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-350} left={-230} onClick={()=>handleClick('K동')}>K동: {buildings['K동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-420} left={-170} onClick={()=>handleClick('L동')}>와우관: {buildings['와우관'] || 0}</BuildingIcon>
                    <BuildingIcon top={-530} left={-180} onClick={()=>handleClick('I동')}>I동: {buildings['I동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-500} left={100} onClick={()=>handleClick('A동')}>A동: {buildings['A동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-580} left={50} onClick={()=>handleClick('B동')}>B동: {buildings['B동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-650} left={110} onClick={()=>handleClick('C동')}>C동: {buildings['C동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-690} left={180} onClick={()=>handleClick('D동')}>D동: {buildings['D동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-650} left={0} onClick={()=>handleClick('Z1동')}>Z1동: {buildings['Z1동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-695} left={125} onClick={()=>handleClick('Z2동')}>Z2동: {buildings['Z2동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-800} left={-100} onClick={()=>handleClick('중앙도서관')}>중앙도서관: {buildings['중앙도서관'] || 0}</BuildingIcon>
                    <BuildingIcon top={-870} left={0} onClick={()=>handleClick('E동')}>E동: {buildings['E동'] || 0}</BuildingIcon>
                    <BuildingIcon top={-830} left={55} onClick={()=>handleClick('S동')}>S동: {buildings['S동'] || 0}</BuildingIcon>
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
