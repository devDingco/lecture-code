"use client";

import { useParams } from "next/navigation";

export default function BoardsDetailPage() {
  const { boardId } = useParams();

  return (
    <>
      <div>안녕하세요 게시판 동적페이지입니다.</div>
      <div>게시글아이디: {boardId}</div>
    </>
  );
}
