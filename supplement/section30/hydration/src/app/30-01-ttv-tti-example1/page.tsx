"use client";

export default function TtvTtiExample1Page() {
  return (
    <div>
      <div>브라우저+서버 철수</div>
      {process.browser && <div>브라우저 영희</div>}
      {typeof window !== "undefined" && <div>브라우저 훈이</div>}
      <div>브라우저+서버 맹구</div>
    </div>
  );
}
