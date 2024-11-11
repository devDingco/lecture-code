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

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

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
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. 이미지등록(uploadFile)
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url;

    // 2. 게시글등록(createBoard)
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
