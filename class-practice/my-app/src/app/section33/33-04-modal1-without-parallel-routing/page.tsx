"use client";

import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
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
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(FETCH_BOARDS);

  const onClickModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <br />
      <button onClick={onClickModalOpen}>게시글쓰기</button>

      {/* 뒤로가기 누르면 모달이 닫히지 않고, 이전페이지로 돌아감 => 하이브리드앱 개발시 문제 */}
      {isOpen && (
        <Modal open={true}>
          제목: <input type="text" />
          내용: <input type="text" />
          <button>등록하기</button>
        </Modal>
      )}
    </div>
  );
}
