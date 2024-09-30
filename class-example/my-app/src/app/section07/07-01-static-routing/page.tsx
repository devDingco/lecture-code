"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const 라우터 = useRouter();

  const onClickSubmit = () => {
    // 1. 게시글 등록하기
    // ...

    // 2. 등록된 페이지로 이동하기
    라우터.push("/section07/07-01-static-routing-moved");
    // 라우터.push("section07/07-01-static-routing-moved"); // 맨 앞에 /로 시작해야됨 => 아무것도 없으면? ./로 인식
  };

  return <button onClick={onClickSubmit}>게시글 등록하기</button>;
}
