import styled from "styled-components"
import { theme } from "../../styles/theme"
import view_logo from './view_img.svg'
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

export const LostCard = ({content}) => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        navigate(`/post/${content?.id}`, {state: {
            id: content?.id
        }})
    }, [content?.id, navigate])
    
    return (
        <Container onClick={handleClick}>
            <Image src={content?.src} />
            <Title>{content?.title}</Title>
            <Number>
                <Location>{content?.location}</Location>
                <NumberBox>
                    <ImgBox src={view_logo} alt=''/>
                    <NumberText>{content?.totalView}</NumberText>
                </NumberBox>
            </Number>
        </Container>
    )
}

const Container = styled.div`
    grid-column: span 1;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    width: 210px;
`

const Image = styled.img`
    width: 210px;
`

const Title = styled.div`
    margin: 5px 0;
    font-size: ${theme.size.font.title3}px;
    color: black;
    font-weight: 700;
`

const Location = styled.div`
    color: ${theme.colors.gray};
    font-size: ${theme.size.font.body1};
`

const Number = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const NumberBox = styled.div`
    display: flex;
`

const ImgBox = styled.img`
    margin-right: 20px;
    margin-top: -5px;
`

const NumberText = styled(Location)`
    position: relative;
`