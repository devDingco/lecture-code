"use client";

import Box from "@/components/13-04-props-children2-typescript";

export default function 페이지() {
  return (
    <>
      <div>+++++ 철수 영희 훈이 +++++</div>
      {/* 쏙들어가기! 땡겨오기! */}
      <Box school="다람쥐초등학교">
        <div>
          <input type="text" />
          <button>버튼2</button>
          <div>안녕하세요!!</div>
        </div>
      </Box>
      <div>+++++ 철수 영희 훈이 +++++</div>
    </>
  );
}
