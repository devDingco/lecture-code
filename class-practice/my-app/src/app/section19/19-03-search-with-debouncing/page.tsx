"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoardWithSearches($mypage: Int, $mysearch: String) {
    fetchBoards(page: $mypage, search: $mysearch) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onClickPage = (event) => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 저장되어 있는 상태이므로, 여기서 굳이 추가 안해도 됨
    refetch({ mypage: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({ mysearch: value, mypage: 1 });
  }, 500);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ mysearch: search, mypage: 1 });
  // };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
