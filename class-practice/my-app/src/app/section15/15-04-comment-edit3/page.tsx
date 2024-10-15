"use client";

import CommentItem from "@/components/15-04-comment-edit3";
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
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
