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

    // const result = await uploadFile({ variables: { file } });
    // console.log(result.data.uploadFile.url);
    // setImageUrl(result.data.uploadFile.url);

    // 1. 임시URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능. 하지만 용량 큼)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string")
        setImageUrl(event.target?.result);
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />
    </>
  );
}
