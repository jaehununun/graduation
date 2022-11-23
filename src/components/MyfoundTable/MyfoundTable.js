import styled from "styled-components";
import { timeMaker } from "../../utils/timeMaker";
export const MyfoundTable = ({ posts, handleOnClick }) => {
  return (
    <Block>
      <TableStyles>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr onClick={()=>handleOnClick(post)} key={index}>
              <td>{post.title}</td>
              <td>{timeMaker(post.date)}</td>
              <td>{post.hit}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </Block>
  );
};

const Block = styled.div`
  overflow-y: scroll;
  max-height: 673px;
  height: 100%;
  width: 100%;
  margin-top: 18px;
`;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f8f8;

  thead {
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
  }

  th,
  td {
    text-align: center;
  }

  th {
    color: #464646;
    font-size: 14px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    flex: 1;
  }

  tr {
    height: 40px;
    display: flex;
    & > td:first-child {
      cursor: pointer;
      flex: 4;
    }
    & > td:nth-child(2) {
      cursor: pointer;
      flex: 1;
    }
    & > td:nth-child(3) {
      cursor: pointer;
      flex: 2;
    }

    & > th:first-child {
      cursor: pointer;
      flex: 4;
    }
    & > th:nth-child(2) {
      cursor: pointer;
      flex: 1;
    }
    & > th:nth-child(3) {
      cursor: pointer;
      flex: 2;
    }
  }
  td {
    flex: 1;
    background-color: #fff;
    font-size: 14px;
    color: #464646;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    border-bottom: 1px solid #ececec;
  }
`;
