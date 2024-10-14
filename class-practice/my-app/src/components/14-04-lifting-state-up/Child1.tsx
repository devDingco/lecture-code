"use client";

export default function Child1(props) {
  const onClickCountUp = () => {
    props.카운트바꿔주는함수(props.카운트변수 + 1); // prev도 가능함
  };

  return (
    <>
      <div>자식1의 카운트: {props.카운트변수}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
