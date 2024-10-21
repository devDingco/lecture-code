"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0]; // 배열로 들어오는 이유: <input type="file" multiple />일 때, 여러개 드래그 가능
    console.log(file);

    const result = await uploadFile({ variables: { file } });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
