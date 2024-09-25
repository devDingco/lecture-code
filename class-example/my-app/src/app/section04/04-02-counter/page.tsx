"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState 못씀) => 신버전 방식은 뒤에서 배움

import { useState } from "react";

const 카운터 = () => {
  const [카운트변수, 카운트바꿔주는함수] = useState(0);

  const 카운트올리는기능 = () => {
    카운트바꿔주는함수(카운트변수 + 1);
  };

  const 카운트내리는기능 = () => {
    카운트바꿔주는함수(카운트변수 - 1);
  };

  // 함수의 리턴은 1개만 할 수 있음! => 따라서, 하나로 묶자!
  return (
    <>
      <div>{카운트변수}</div>
      <button onClick={카운트올리는기능}>카운트 올리기!!!</button>
      <button onClick={카운트내리는기능}>카운트 내리기!!!</button>
    </>
  );
};

export default 카운터;
