"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeList as List } from "react-window";

const FETCH_BOARDS = gql`
  query fetchBoards($mypage: Int) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        mypage: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<></>} /* 로딩은 의미 없음 */
        dataLength={data?.fetchBoards.length ?? 0}
        scrollableTarget="스크롤대상ID" // <List /> 컴포넌트에 id를 "스크롤대상ID"로 바꾸기
      >
        <List
          height={300} /* 전체 높이 */
          width={"100%"} /* 전체 가로 */
          itemSize={50} /* 아이템 높이 */
          itemCount={data?.fetchBoards.length}
          itemData={data?.fetchBoards}
          outerElementType={전체를감싸는태그}
        >
          {({ index, style, data }) => (
            <div style={style}>
              <span style={{ margin: "10px" }}>{data[index].title}</span>
              <span style={{ margin: "10px" }}>{data[index].writer}</span>
            </div>
          )}
        </List>
      </InfiniteScroll>
      <Link href="/section31/31-18-infinite-scroll-with-windowing-moved">
        페이지 이동하기
      </Link>
    </div>
  );
}

const 전체를감싸는태그 = (props) => <div id="스크롤대상ID" {...props} />;
