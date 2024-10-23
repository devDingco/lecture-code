"use client";

import { useRouter } from "next/navigation";

export default function Pagination() {
  const router = useRouter();

  const onClickPage = (event) => {
    const page = Number(event.currentTarget.id);
    router.push(`?page=${page}`);
  };

  console.log("페이지내이션이 리렌더 되었습니다.");

  return (
    <div>
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
