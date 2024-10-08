"use client";

import { CloseCircleOutlined } from "@ant-design/icons";
import { MouseEvent } from "react";

export default function LibraryIconPage() {
  // 1. 대부분의 아이콘 라이브러리들은 <span />를 부모로 하여 내부에 아이콘 이미지가 자식으로 들어감
  // 2. 이미지 클릭시, 부모로 onClick 이벤트가 전파됨
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>) => {
    // alert(`${event.target.id}를 정말로 삭제합니까?`); // 비어있음
    alert(`${event.currentTarget.id}를 정말로 삭제합니까?`); // 정상작동
  };

  return <CloseCircleOutlined id="삭제할게시글ID" onClick={onClickDelete} />;
}
