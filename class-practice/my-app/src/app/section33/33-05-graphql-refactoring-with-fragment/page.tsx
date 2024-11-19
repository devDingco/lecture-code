"use client";

import { FETCH_BOARDS } from "@/commons/apis/33-05-queries/fetch-boards";
import { useQuery } from "@apollo/client";

export default function StaticRoutingMovedPage() {
  // 1. 기본데이터만 필요한 경우
  //   const { data } = useQuery(FETCH_BOARDS);

  // 2. 기본데이터+주소데이터 필요한 경우
  //   const { data } = useQuery(FETCH_BOARDS, {
  //     variables: {
  //       mypage: 1,
  //       isBoardForAddressSet: true,
  //     },
  //   });

  // 3. 모든데이터 필요한 경우
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      mypage: 1,
      isBoardForAddressSet: true,
      isBoardForLikeSet: true,
    },
  });

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>

          <span style={{ margin: "10px" }}>
            {el.boardAddress?.address ?? "주소없음"}
          </span>
          <span style={{ margin: "10px" }}>{el.likeCount ?? "좋아요없음"}</span>
        </div>
      ))}
    </div>
  );
}
