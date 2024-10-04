"use client";

export default function BoardsWriteUI(props) {
  return (
    <>
      작성자:
      <input
        type="text"
        onChange={props.작성자입력하는기능}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={props.제목입력하는기능}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={props.내용입력하는기능}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? props.수정하는기능 : props.등록하는기능}>
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
