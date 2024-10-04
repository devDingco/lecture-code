"use client";

import { useBoardsWrite } from "./hook";
import { IBoardsWriteProps } from "./types";

export default function BoardsWrite(props: IBoardsWriteProps) {
  const {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickUpdate,
  } = useBoardsWrite();

  return (
    <>
      작성자:
      <input
        type="text"
        onChange={onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
