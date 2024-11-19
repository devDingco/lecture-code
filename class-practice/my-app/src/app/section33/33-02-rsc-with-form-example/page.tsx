"use client";

import { useFormState } from "react-dom";
import onSubmit from "./actions";

export default function RscWithFormExamplePage() {
  const [state, 게시글등록기능] = useFormState(onSubmit);
  console.log(state); // 서버에서 실행되고 브라우저 결과받기

  return (
    <form action={게시글등록기능}>
      제목: <input type="text" name="title" />
      <br />
      내용: <input type="text" name="contents" />
      <br />
      <button>등록하기</button>
    </form>
  );
}
