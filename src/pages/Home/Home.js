import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { LostCard } from "../../components/LostCard/LostCard"
import { dummy } from "./data"
export const Home = () => {
    return (
        <Layout>
            <Container>
                <GridContainer>
                    {dummy.map((el) => (
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