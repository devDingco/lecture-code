"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($mynumber: Int) {
    deleteBoard(number: $mynumber) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        mynumber: Number(event.target.id),
      },
      refetchQueries: [
        { query: FETCH_BOARDS },
        // {}
        // ...
      ],
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el.number}>
          {/* 1. 특별한 이유가 없으면? Fragment로 감싸자! <div />는 1개 더 그려야되니깐 */}
          {/* 2. 프레그먼트는? <></> , <Fragment></Fragment> */}
          {/* 3. 프레그먼트에 key를 입력하려면? <Fragment key={1}></Fragment> */}
          {/* 4. index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
