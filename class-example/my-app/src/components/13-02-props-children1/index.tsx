"use client";

export default function Box({ children }) {
  return (
    <>
      <div>+++++ 사과 바나나 딸기 +++++</div>
      <div>{children}</div>
      <div>+++++ 사과 바나나 딸기 +++++</div>
    </>
  );
}
