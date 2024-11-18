"use client";

import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {
  // hobby: string   =>   추가도 가능
}

export const schema: z.ZodType<ISchema> = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해주세요." }),
});
