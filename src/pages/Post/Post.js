import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme"
import { dummy } from "../Home/data"
import user_icon from '../../components/Header/user_img.svg'
import { timeMaker } from "../../utils/timeMaker"

export const Post = () => {
    const location = useLocation()
    const {id} = location.state
    const [data, setData] = useState({})

    const getData = useCallback(() => {
        setData(dummy.filter((el) => el.id === id)[0])
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <Layout>
            <Wrapper>
                <Container>
                    <ImageContainer src={data?.src}/>
                    <UserContainer>
                        <img src={user_icon} alt=''/>
                        <UserInfo>{`${data?.user?.studentNumber} ${data?.user?.name}`}</UserInfo>
                        <UserInfo>{data?.location}</UserInfo>
                    </UserContainer>
                    <ContentContainer>
                        <Title>{data?.title}</Title>
                        <Title2>{data?.content?.kind} | {timeMaker(data?.createdAt)}</Title2>
                        <div style={{margin: '5px 0'}}>발견장소 : {data?.content?.foundAddr}</div>
                        <div style={{margin: '5px 0'}}>보관장소 : {data?.content?.keepAddr}</div>
                        <div style={{margin: '5px 0'}}>종류 : {data?.content?.kind}</div>
                        <div style={{margin: '5px 0'}}>브랜드 : {data?.content?.brand}</div>
                        <div style={{margin: '5px 0'}}>색상 : {data?.content?.color}</div>
                        <div style={{margin: '5px 0'}}>{data?.content?.etc}</div>
                    </ContentContainer>
                </Container>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContainer = styled.div`
    background-image: url(${({src}) => src});
    width: 900px;
    height: 400px;
    background-size: contain;
    background-position: center;
    margin-bottom: 50px;
    background-repeat: no-repeat;
`

const UserContainer = styled.div`
    width: 900px;
    border-bottom: 1px solid black;
    padding: 10px 0;
    display: flex;
    align-items: center;
`

const UserInfo = styled.div`
    color: ${theme.colors.gray};
    font-size: ${theme.size.font.body1}px;
    max-width: 150px;
    white-space: normal;
    margin-left: 5px;
    position: relative;
    top: 7px;
    min-height: 30px;
    margin-right: 50px;
`

const Title = styled.div`
    font-size: ${theme.size.font.title2}px;
    font-weight: 800;
    padding: 10px 0;
`

const ContentContainer = styled.div`
    width: 900px;
    padding-bottom: 100px;
`

const Title2 = styled.div`
    font-size: ${theme.size.font.title3};
    font-weight: 600;
    color: ${theme.colors.gray};
    margin-bottom: 50px;
`