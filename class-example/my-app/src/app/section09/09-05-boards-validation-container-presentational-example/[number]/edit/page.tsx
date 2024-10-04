"use client";

import BoardsWrite from "@/components/09-05-boards-write-validation-container-presentational-example/boards-write.container";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($mynumber: Int) {
    fetchBoard(number: $mynumber) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardsDetailEditPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { mynumber: Number(params.number) },
  });

  return <BoardsWrite isEdit={true} data={data} />;
}
