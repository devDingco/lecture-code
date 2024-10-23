// "use client"; => 서버컴포넌트

import List from "@/components/33-01-search-refactoring/list";
import Pagination from "@/components/33-01-search-refactoring/pagination";
import Search from "@/components/33-01-search-refactoring/search";

export default function StaticRoutingMovedPage() {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}
