"use client";

import { useCountStore } from "@/commons/stores/21-03-count-store";

export default function Child1(props) {
  const { count, setCount } = useCountStore();

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>자식1의 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
