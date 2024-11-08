"use client";

import { memo } from "react";

function Word(props) {
  console.log("자식이 렌더링 됩니다!", props.el);

  return <span>{props.el}</span>;
}

export default memo(Word);
