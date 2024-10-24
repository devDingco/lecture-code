"use client"; // 리액트 구버전 방식으로 실행해줘! (이거 없으면 useState 못씀) => 신버전 방식은 뒤에서 배움

import Child1 from "@/components/21-03-global-state-with-zustand/Child1";
import Child2 from "@/components/21-03-global-state-with-zustand/Child2";

const 카운터 = () => {
  // 함수의 리턴은 1개만 할 수 있음! => 따라서, 하나로 묶자!
  return (
    <>
      <Child1 />
      <div>===========================</div>
      <Child2 />
    </>
  );
};

export default 카운터;
