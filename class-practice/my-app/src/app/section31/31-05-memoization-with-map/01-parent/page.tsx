"use client";

import { useState } from "react";
import Word from "../02-child/page";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };

  return (
    <>
      {/* 1. memo시, key 또는 el이 변경된 부분만 리렌더링 됨 */}
      {/* {data.split(" ").map((el, index) => (
        <Word key={`${el}_${index}`} el={el} />
      ))} */}

      {/* 2. memo를 해도, key자체가 변경되므로, 5개 모두 리렌더링 됨 */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} />
      ))}
      <button onClick={onClickChange}>문장 변경하기</button>
    </>
  );
}
