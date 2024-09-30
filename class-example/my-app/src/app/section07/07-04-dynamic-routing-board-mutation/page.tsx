"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  # 타입적는곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      _id
      number
      message
    }
  }
`;

export default function StaticRoutingPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // try에 있는 내용을 시도하다가 실패하면, 그 아랫줄들을 무시하고 catch로 넘어감
    try {
      // 여기서 그래프큐엘 요청하기
      console.log("요청을 시작합니다.");
      const result = await 나의함수({
        // variables 이게 $역할을 함
        variables: {
          mywriter: writer,
          mytitle: title,
          mycontents: contents,
        },
      });
      console.log("요청을 받았습니다."); // 실패하면 이거 아래로 실행 안됨

      console.log(result);
      console.log(result.data.createBoard.number);
      alert("게시글 등록에 성공하였습니다.");

      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
