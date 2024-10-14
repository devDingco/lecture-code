"use client";

import List from "@/components/14-06-pagination-last-refactoring-typescript/list";
import Pagination from "@/components/14-06-pagination-last-refactoring-typescript/pagination";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./queries";

export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  console.log(data);

  return (
    <div>
      <List data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
