"use client";

import React, { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  // === 1단계 방식 => onChange는 Antd 개발자들이 만든 가짜 onChange임(value 들어옴) ===
  //   const onChangeStar = (value) => {
  //     // let value = 5 과 같은 형식

  //     setValue(value);
  //   };

  //   return <Rate onChange={onChangeStar} value={value} />;

  //
  // === 2단계 방식 ===
  //   const onChangeStar = (value) => setValue(value); // 중괄호와 return 사이에 아무것도 없으면 소괄호로 변경 가능 => 특별한 의미 없으면 소괄호 생략 가능

  //   return <Rate onChange={onChangeStar} value={value} />;

  //
  // === 3단계 방식 ===
  //   return <Rate onChange={(value) => setValue(value)} value={value} />;

  //
  // === 4단계 방식 ===
  return <Rate onChange={setValue} value={value} />;
}
