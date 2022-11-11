import styled from "styled-components";

export const Comment = ({ data }) => {
  return (
    <Wrapper>
      <Name>{`${data.user.studentNumber}   ${data.user.name}`}</Name>
      <Content>{data.content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
`;

const Name = styled.div`
  height: 5px;
  font-size: 12px;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  white-space: normal;
  min-height: 40px;
`;
