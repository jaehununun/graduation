import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import campusMap from "../Location/campusmap.svg"
export const Location =()=>{
    const building = [
        {
            buildingNum: 1,
            buildingName: "T동",
        },
        {
            buildingNum: 2,
            buildingName: "R동",
        }, {
            buildingNum: 3,
            buildingName: "K동",
        },
        {
            buildingNum: 4,
            buildingName: "L동",
        }, {
            buildingNum: 5,
            buildingName: "I동",
        },
        {
            buildingNum: 6,
            buildingName: "A동",
        }, {
            buildingNum: 7,
            buildingName: "B동",
        },
        {
            buildingNum: 8,
            buildingName: "C동",
        }, {
            buildingNum: 9,
            buildingName: "D동",
        },
        {
            buildingNum: 10,
            buildingName: "Z2동",
        }, {
            buildingNum: 11,
            buildingName: "Z3동",
        },
        {
            buildingNum: 12,
            buildingName: "중앙도서관",
        }, {
            buildingNum: 13,
            buildingName: "현대미술관",
        },
        {
            buildingNum: 14,
            buildingName: "E동",
        }, {
            buildingNum: 15,
            buildingName: "S동",
        }
    ]
    return (
        <Layout>
            <Container>
                <CampusMapContainer>
                    <img src={campusMap} alt=''></img>
                </CampusMapContainer>
                <BuildingContainer>
                    {building.map((el)=>(
                        <Building >{el.buildingNum}. {el.buildingName}</Building>
                    ))}
                </BuildingContainer>
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
    height: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BuildingContainer = styled.div`
    width: 750px;
    height: 430px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1px;
    margin-top: 10px;
`
const Building = styled.div`
    width: 100px;
    height: 10px;
`