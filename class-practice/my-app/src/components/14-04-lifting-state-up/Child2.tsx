"use client";

export default function Child2(props) {
  return (
    <>
      <div>자식2의 카운트: {props.카운트변수}</div>
      <button onClick={props.카운트올리는기능}>카운트 올리기!!!</button>
    </>
  );
}
