import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Layout } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme"
import user_icon from '../../components/Header/user_img.svg'
import { timeMaker } from "../../utils/timeMaker"
import { Posts } from "../Lost/Lost"
import { Comment } from "../../components/Comment/Comment";
import { BasicButton } from "../../components/Button/BasicButton";

const comments = [
    {
      id: 1,
      user: {
        name: "유병익",
        studentNumber: "B811111",
      },
      content: "얼른 찾길.....",
    },
    {
      id: 2,
      user: {
        name: "유송경",
        studentNumber: "B911111",
      },
      content: "와우관에 맡겨놨습니다. 찾아가세요",
    },
    {
      id: 3,
      user: {
        name: "김재훈",
        studentNumber: "B611044",
      },
      content: "찾았습니다!!! 감사합니다 ㅎ",
    },
];

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
                    <CommentInputContainer>
                        <CommentInput placeholder="댓글을 입력하세요" />
                        <BasicButton title="등록" width={80} />
                    </CommentInputContainer>
                    <CommentContainer>
                        {comments.map((el) => (
                        <Comment data={el} key={el.id} />
                        ))}
                    </CommentContainer>
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
const CommentInputContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CommentInput = styled.textarea`
  width: 800px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  height: 50px;
  border: none;
`;

const CommentContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`;