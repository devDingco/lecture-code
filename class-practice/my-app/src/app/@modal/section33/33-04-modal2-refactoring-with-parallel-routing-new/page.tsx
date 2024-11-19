import { Modal } from "antd";

export default function Modal2RefactoringWithParallelRoutingNewPage() {
  return (
    <Modal open={true}>
      제목: <input type="text" />
      내용: <input type="text" />
      <button>등록하기</button>
    </Modal>
  );
}
