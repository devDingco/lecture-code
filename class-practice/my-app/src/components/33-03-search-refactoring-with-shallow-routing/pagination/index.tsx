"use client";

export default function Pagination() {
  const onClickPage = (event) => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 저장되어 있는 상태이므로, 여기서 굳이 추가 안해도 됨
    // refetch({ mypage: Number(event.currentTarget.id) });
  };

  return (
    <>
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
