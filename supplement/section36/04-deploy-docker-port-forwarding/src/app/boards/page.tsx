"use client";

import { useState } from "react";

export default function BoardsPage() {
  const [state] = useState("철수");

  return <div>안녕하세요 {state} 정적페이지입니다.</div>;
}
