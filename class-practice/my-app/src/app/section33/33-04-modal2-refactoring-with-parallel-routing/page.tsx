"use client";

import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import Link from "next/link";
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
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <br />
      <Link href="/section33/33-04-modal2-refactoring-with-parallel-routing-new">
        게시글쓰기
      </Link>
    </div>
  );
}
