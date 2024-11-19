"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  contents: z.string().min(1, "내용을 입력해주세요."),
});

export default async function onSubmit(prevState, formData) {
  // 여기는 Next서버에서 실행되는 곳입니다.(브라우저 아님!!!)
  console.log(formData);

  const title = formData.get("title");
  const contents = formData.get("contents");
  console.log(title);
  console.log(contents);

  const 검사 = schema.safeParse({
    title,
    contents,
  });

  if (검사.success) {
    // 등록하기
    // await 등록
  } else {
    return {
      errors: 검사.error.flatten().fieldErrors,
    };
  }
}
