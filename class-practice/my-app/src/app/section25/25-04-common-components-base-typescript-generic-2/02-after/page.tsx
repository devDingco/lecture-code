"use client";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import { InputSoftSFull } from "@/commons/ui/25-04-input-base-typescript-generic-2";
import { ButtonSoftMFull } from "@/commons/ui/25-04-button-base-typescript-generic-2";

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
  const methods = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  // const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (data: ISchema) => {
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br /> */}
        {/* 제목: <input type="text" {...register("title")} /> */}
        {/* 제목(함수): {InputSoftSFull<ISchema>({ type: "text", keyname: "title" })} */}
        제목(컴포넌트): <InputSoftSFull<ISchema> type="text" keyname="title" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.title?.message}
        </div>
        <br />
        {/* 내용: <input type="text" {...register("contents")} /> */}
        {/* 내용(함수): {InputSoftSFull<ISchema>({ type: "text", keyname: "contents" })} */}
        내용(컴포넌트):
        <InputSoftSFull<ISchema> type="text" keyname="contents" />
        <div style={{ color: "red" }}>
          {methods.formState.errors.contents?.message}
        </div>
        <br />
        {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
        {/* <button disabled={!methods.formState.isValid}>
          GRAPHQL-API 요청하기
        </button> */}
        <ButtonSoftMFull<ISchema>>GRAPHQL-API 요청하기</ButtonSoftMFull>
      </form>
    </FormProvider>
  );
}
/*
  <form>
    <button type="button"></button> // 내가 onClick 추가하고 싶을때!
    <button type="reset"></button>  // 폼 안에 있는 인풋들 초기화 하고 싶을때!
    <button type="submit"></button> // 폼 등록/수정 등 하고 싶을때 => 디폴트값!
  </form>
*/
