import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { useState } from "react";

// const profile = {
//   name: "철수",
//   age: 12
// }

// profile.name // 철수
// profile["name"] // 철수

interface ICommentItemProps {
  el: FetchBoardsQuery["fetchBoards"][0];
}
export default function CommentItem({ el }: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
