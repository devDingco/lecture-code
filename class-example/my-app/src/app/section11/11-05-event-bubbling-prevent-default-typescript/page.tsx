"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument, { variables: {} });

  console.log(data);

  // const onClickAlert = (event) => {
  //   // event.target => 내가 클릭한 태그
  //   // event.currentTarget => 내 클릭이 버블링되면 부모꺼 onClick 실행되는데, 현재 실행된 그 태그
  //   alert(`${event.currentTarget.id}님이 작성한 게시글 입니다.`);
  // };

  const onClickLike = (event: MouseEvent<HTMLSpanElement>) => {
    // event.stopPropagation();
    event.preventDefault();

    alert("좋아요가 +1 올랐습니다");
  };

  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <a key={el.number} href="https://naver.com">
          <div id={el.writer ?? "작성자없음"}>
            <span>
              <input type="checkbox" />
            </span>
            <span style={{ margin: "10px" }}>{el.number}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span onClick={onClickLike}>좋아요</span>
          </div>
        </a>
      ))}
    </div>
  );
}
