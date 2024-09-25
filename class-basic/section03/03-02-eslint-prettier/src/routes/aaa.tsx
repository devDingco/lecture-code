import { Link } from "react-router-dom";

const Aaa = () => {
  // const 철수의상자: number = "3살"

  return (
    <>
      <div>Aaa 페이지 입니다.</div>

      {/* 1. 리액트의 이동방식: 현재페이지에서 JS로 태그만 바꿔치기 => SPA */}
      <Link to="/bbb">Bbb 페이지로 갈래요</Link>

      {/* 2. 고전HTML 이동방식: html페이지 새로접속함(느림) => MPA */}
      <a href="/bbb">Bbb 페이지로 갈래요</a>
    </>
  );
};

export default Aaa;
