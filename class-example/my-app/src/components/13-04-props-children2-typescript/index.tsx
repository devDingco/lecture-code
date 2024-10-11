"use client";

import { IBoxProps } from "./types";

export default function Box({ children, school }: IBoxProps) {
  return (
    <>
      <div>+++++ 사과 바나나 딸기 +++++</div>
      <div>{school}</div>
      <div>{children}</div>
      <div>+++++ 사과 바나나 딸기 +++++</div>
    </>
  );
}
