import { useState } from "react";

export default function CommentItem({ el }) {
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
