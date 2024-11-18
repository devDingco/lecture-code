"use client";
import Rsc from "./02-rsc";

// 클라이언트 컴포넌트

export default function Rcc({ children }) {
  console.log("클라이언트 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>저는 클라이언트 컴포넌트입니다.</div>
      <>{children}</>
    </>
  );
}
