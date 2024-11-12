"use client";

import { gql, useApolloClient, useQuery } from "@apollo/client";
import Link from "next/link";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($mypage: Int) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const client = useApolloClient();

  const prefetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 200);

  const prefetchBoard = (boardId) => () => {
    prefetchBoardDebounce(boardId);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Link href={`/section31/31-14-data-prefetch-moved/${el._id}`}>
            <span
              style={{ margin: "10px" }}
              onMouseOver={prefetchBoard(el._id)}
            >
              {el.title}
            </span>
          </Link>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
