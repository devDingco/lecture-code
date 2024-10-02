"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardsDetailPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { mynumber: Number(params.number) },
  });

  console.log(data);

  return (
    <div>
      <div>1번 게시글 상세페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : ""}</div>
      <Link href={`/section09/09-04-boards-validation/${params.number}/edit`}>
        수정하러가기
      </Link>
    </div>
  );
}
