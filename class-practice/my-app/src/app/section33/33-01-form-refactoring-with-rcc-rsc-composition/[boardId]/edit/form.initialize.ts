"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { ISchema } from "./form.schema";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

export const useInitialize = ({ setValue, trigger }) => {
  const { boardId } = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  // 1. 수정하기 초기값 설정
  useEffect(() => {
    if (!data) return;

    const { title, contents } = data.fetchBoard;
    setValue("title", title);
    setValue("contents", contents);

    trigger();
  }, [data]);

  // 2. 수정완료 기능
  const onSubmit = async (data: ISchema) => {
    console.log(data);

    // 여기서 그래프큐엘 요청하기
  };

  return {
    onSubmit,
  };
};
