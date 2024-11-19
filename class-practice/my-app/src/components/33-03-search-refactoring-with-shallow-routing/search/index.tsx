"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // refetch({ mysearch: search, mypage: 1 });
    // 1. 샬로우라우팅
    //     => 페이지 가만히 있고 url만 변경
    //     => url관련 컴포넌트(usePathname, useSearchParams 등)만 리렌더
    //     => 구버전에서는? router.push(주소, 옵션, { shallow: true })
    window.history.pushState(null, "", `?search=${search}`);
  };

  console.log("검색이 리렌더 되었습니다.");

  return (
    <>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </>
  );
}
