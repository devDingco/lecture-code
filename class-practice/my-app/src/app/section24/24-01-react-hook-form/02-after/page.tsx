"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

// const 나의그래프큐엘셋팅 = gql`
//   #   # 타입적는곳
//   #   mutation createBoard(
//   #     $mywriter: String
//   #     $mytitle: String
//   #     $mycontents: String
//   #   ) {
//   #     # 전달할 변수 적는곳
//   #     createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
//   #       _id
//   #       number
//   #       message
//   #     }
//   #   }
// `;

export default function GraphqlMutationPage() {
  const { register, handleSubmit } = useForm();
  // const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (data) => {
    console.log(data);

    // 여기서 그래프큐엘 요청하기
    // const result = await 나의함수({
    //   // variables 이게 $역할을 함
    //   variables: {
    //     mywriter: data.writer,
    //     mytitle: data.title,
    //     mycontents: data.contents,
    //   },
    // });
    // console.log(result);
  };

  console.log("리렌더링 되나요?");

  // 한 줄일때는 괄호() 필요 없음
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}
/*
  <form>
    <button type="button"></button> // 내가 onClick 추가하고 싶을때!
    <button type="reset"></button>  // 폼 안에 있는 인풋들 초기화 하고 싶을때!
    <button type="submit"></button> // 폼 등록/수정 등 하고 싶을때 => 디폴트값!
  </form>
*/
