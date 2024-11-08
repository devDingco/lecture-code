"use client";

import { memo } from "react";

function ChildPage(props) {
  console.log("자식이 렌더링 됩니다!");

  return (
    <>
      <div>=======================</div>
      <h1>저는 자식 컴포넌트 입니다!!!</h1>
      <div>=======================</div>
    </>
  );
}

export default memo(ChildPage);
