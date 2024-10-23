"use client";

import { gql, useQuery } from "@apollo/client";

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

export default function Pagination() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { mypage: 1 },
  });

  const onClickPage = (event) => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 저장되어 있는 상태이므로, 여기서 굳이 추가 안해도 됨
    refetch({ mypage: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
