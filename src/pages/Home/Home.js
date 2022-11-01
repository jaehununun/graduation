import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { LostCard } from "../../components/LostCard/LostCard"
import { dummy } from "./data"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import register from './register.svg';
export const Home = () => {
    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        navigate('/')
    }, [navigate])
    return (
        <Layout>
            <Container>
                <GridContainer>
                    {dummy.map((el) => (
                        <LostCard key={el.id} content={el}/>
                    ))}
                </GridContainer>
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

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
`