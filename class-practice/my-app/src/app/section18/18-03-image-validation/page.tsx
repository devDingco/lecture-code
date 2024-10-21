"use client";

import { checkValidationFile } from "@/commons/libraries/18-03-validation-file";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef();

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0]; // 배열로 들어오는 이유: <input type="file" multiple />일 때, 여러개 드래그 가능
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  };

  const onClickImage = () => {
    // document.getElementById("파일태그ID")?.click()
    fileRef.current.click();
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }} // 개발자도구에서 태그 확인 가능(그림만 안보임)
        ref={fileRef}
        accept="image/png, image/jpeg" // 1. jpg/jpeg 모두 가능,  2. 콤마(',')로 구분하기
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
