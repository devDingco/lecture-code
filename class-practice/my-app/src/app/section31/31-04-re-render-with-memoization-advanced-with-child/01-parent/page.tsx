"use client";

import { useCallback, useMemo, useState } from "react";
import ChildPage from "../02-child/page";

export default function ReRenderPage() {
  console.log("컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. 변수 기억 => useMemo
  // const aaa = Math.random();
  // console.log(aaa);
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. 함수 기억 => useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // 3. useCallback 주의사항 => state까지 기억됨
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. useMemo로 나만의 useCallback 만들기
  // const onClickCountState2 = useMemo(() => {
  //   return () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };
  // }, []);

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* 5. 로직과 UI를 함께 쓰기 => 유지보수 힘들고 복잡함 */}
      {/* <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback(() => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state) +1 올리기
      </button> */}

      <div>=============================</div>

      {/* 자식에 memo한 경우, 자식 리렌더 되지 않음 */}
      <ChildPage />

      {/* 자식에 memo 했어도, props 넘어가면 리렌더 됨 */}
      {/* <ChildPage qqq={countState} /> */}
    </>
  );
}
