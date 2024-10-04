"use client";

import { useParams, useRouter } from "next/navigation";
import BoardsWriteUI from "./boards-write.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from "./boards-write.queries";

export default function BoardsWrite(props) {
  const router = useRouter();
  const params = useParams();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables 이게 $역할을 함
      variables: {
        mywriter: writer,
        mytitle: title,
        mycontents: contents,
      },
    });
    console.log(result);
    alert("등록이 완료되었습니다.");
    router.push(
      `/section09/09-05-boards-validation-container-presentational-example/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables = { mynumber: Number(params.number) };
    if (writer) myvariables.mywriter = writer;
    if (title) myvariables.mytitle = title;
    if (contents) myvariables.mycontents = contents;

    // 여기서 수정하기 하자!!
    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    alert("수정이 완료되었습니다.");
    router.push(
      `/section09/09-05-boards-validation-container-presentational-example/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <BoardsWriteUI
      작성자입력하는기능={onChangeWriter}
      제목입력하는기능={onChangeTitle}
      내용입력하는기능={onChangeContents}
      등록하는기능={onClickSubmit}
      수정하는기능={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
