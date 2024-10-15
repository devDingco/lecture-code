"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($mypage: Int) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const [myIndex, setMyIndex] = useState(-1);

  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        myIndex !== index ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
}
