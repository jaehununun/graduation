import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme"
import user_icon from '../../components/Header/user_img.svg'
import { timeMaker } from "../../utils/timeMaker"
import { Posts } from "../Lost/Lost"

export const PostLost = () => {
    const location = useLocation()
    const {id} = location.state
    const [data, setData] = useState({})

    const getData = useCallback(() => {
        setData(Posts.filter((el) => el.id === id)[0])
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <Layout>
            <Wrapper>
                <Container>
                    <UserContainer>
                        <img src={user_icon} alt=''/>
                        <UserInfo>{`${data?.user?.studentNumber} ${data?.user?.name}`}</UserInfo>
                        <UserInfo>{data?.location}</UserInfo>
                    </UserContainer>
                    <ContentContainer>
                        <Title>{data?.title}</Title>
                        <Title2>{timeMaker(data.createdAt)}</Title2>
                        <div style={{margin: '5px 0'}}>잃어버린장소 : {data.location}</div>
                        <div style={{margin: '5px 0'}}>{data.content}</div>
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