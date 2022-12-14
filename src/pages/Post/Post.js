import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../../components/Layout/Layout";
import { theme } from "../../styles/theme";
import user_icon from "../../components/Header/user_img.svg";
import { timeMaker } from "../../utils/timeMaker";
import { BasicButton } from "../../components/Button/BasicButton";
import { Comment } from "../../components/Comment/Comment";
import { useGetFoundPost } from "../../hooks/api";

const comments = [
  {
    id: 1,
    user: {
      name: "유송경",
      studentNumber: "B911232",
    },
    content: "저 본거 같아요...",
  },
  {
    id: 2,
    user: {
      name: "유병익",
      studentNumber: "B811111",
    },
    content: "빨리 찾아 가시실......",
  },
  {
    id: 3,
    user: {
      name: "송유경",
      studentNumber: "B522433",
    },
    content: "감사합니다. 덕분에 찾았습니다.",
  },
];

export const Post = () => {
  const location = useLocation();
  const { id } = location.state;
  const [datas, setDatas] = useState({});
  const [req,res]=useGetFoundPost()

  useEffect(() => {
      req(id)
  }, [id, req]);
  useEffect(() => {
    if (res.called && !res.loading && res.data) {
        console.log(res)
        setDatas({
          user: {
            name: res.data.result.userNickname,
          },
          content:{
            foundAddr: res.data.result.lost_location,
            keepAddr:res.data.result.store_location,
            kind:res.data.result.category,
            brand:res.data.result.lost_detail,
            color:res.data.result.store_detail,
            etc:res.data.result.content
          },
          title: res.data.result.title,
          createdAt: res.data.result.date,
          totalView: res.data.result.hit,
          src: res.data.result.url
      });
    }
  }, [res]);

  return (
    <Layout>
      <Wrapper>
        <Container>
          <ImageContainer src={(datas.src||'').split('public')[1]}/>
          <UserContainer>
            <img src={user_icon} alt="" />
            <UserInfo>{`${datas?.user?.name}`}</UserInfo>
            <UserInfo>{datas?.location}</UserInfo>
          </UserContainer>
          <ContentContainer>
            <Title>{datas?.title}</Title>
            <Title2>
              {datas?.content?.kind} | {timeMaker(datas?.createdAt)}
            </Title2>
            <div style={{ margin: "5px 0" }}>
              발견장소 : {datas?.content?.foundAddr}
            </div>
            <div style={{ margin: "5px 0" }}>
              보관장소 : {datas?.content?.keepAddr}
            </div>
            <div style={{ margin: "5px 0" }}>종류 : {datas?.content?.kind}</div>
            <div style={{ margin: "5px 0" }}>
              브랜드 : {datas?.content?.brand}
            </div>
            <div style={{ margin: "5px 0" }}>색상 : {datas?.content?.color}</div>
            <div style={{ margin: "5px 0" }}>{datas?.content?.etc}</div>
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
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.img`
  /* background-image: url((${({ src }) => src})); */
  width: 900px;
  height: 400px;
  background-size: contain;
  background-position: center;
  margin-bottom: 50px;
  background-repeat: no-repeat;
`;

const UserContainer = styled.div`
  width: 900px;
  border-bottom: 1px solid black;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

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
`;

const Title = styled.div`
  font-size: ${theme.size.font.title2}px;
  font-weight: 800;
  padding: 10px 0;
`;

const ContentContainer = styled.div`
  width: 900px;
  margin-bottom: 20px;
`;

const Title2 = styled.div`
  font-size: ${theme.size.font.title3};
  font-weight: 600;
  color: ${theme.colors.gray};
  margin-bottom: 50px;
`;

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
