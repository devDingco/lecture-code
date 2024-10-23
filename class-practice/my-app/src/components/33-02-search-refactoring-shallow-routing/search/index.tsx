"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    // 1. 기본라우팅
    //    => 페이지 리렌더
    // router.push(`?search=${search}`);

    // 2. 샬로우라우팅
    //    => 페이지 가만히 있고 url만 변경
    //    => url관련 컴포넌트(usePathname, useSearchParams 등 사용하는 컴포넌트)만 리렌더
    //    => 구버전에서는? router.push(주소, 옵션, { shallow: true }) 처럼 쉽게 가능했지만 이젠 안됨
    window.history.pushState(null, "", `?search=${search}`);

    // 3. 샬로우라우팅(뒤로가기 기억 안할래)
    window.history.replaceState(null, "", `?search=${search}`);
  };

  console.log("검색이 리렌더 되었습니다.");

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </div>
  );
}
