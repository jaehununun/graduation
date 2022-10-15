import styled from "styled-components"
import { theme } from "../../styles/theme"
import view_logo from './view_img.svg'
import comment_logo from './comment_img.svg'
import delete_logo from './delete_img.svg'

export const LostCard = ({content}) => {
    return (
        <Container>
            <Image src={content?.src} />
            <Title>{content?.title}</Title>
            <Location>{content?.location}</Location>
            <Number>
                <NumberBox>
                    <ImgBox src={view_logo} alt=''/>
                    <NumberText>{content?.totalView}</NumberText>
                </NumberBox>
                <NumberBox>
                    <ImgBox src={comment_logo} alt=''/>
                    <NumberText>{content?.totalComment}</NumberText>
                </NumberBox>
                <NumberBox>
                    <ImgBox src={delete_logo} alt='' style={{margin: '0'}}/>
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
`

const NumberText = styled(Location)`
    position: relative;
    top: 5px;
`