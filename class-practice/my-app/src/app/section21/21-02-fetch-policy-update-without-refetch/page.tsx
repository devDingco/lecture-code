"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards4 {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation {
    updateBoard(
      boardId: "6719bcc35413b3002914df97"
      password: "1234"
      updateBoardInput: { title: "제목변경됨", contents: "내용변경됨" }
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = () => {
    updateBoard();
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <button onClick={onClickUpdate}>수정할래요</button>
    </div>
  );
}
