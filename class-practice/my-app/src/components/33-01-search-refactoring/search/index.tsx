"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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

export default function Search() {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { mypage: 1 },
  });

  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const onClickSearch = () => {
    refetch({ mypage: 2 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </div>
  );
}
