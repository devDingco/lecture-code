"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "673229439712e0002973f1dc" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "673229439712e0002973f1dc",
      },
      //   refetchQueries: [{ ... }]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "673229439712e0002973f1dc" },
          data: {
            fetchBoard: {
              _id: "673229439712e0002973f1dc",
              __typename: "Board",
              likeCount: data.likeBoard, // 좋아요 갯수(6개 가정)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount ?? 0}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
