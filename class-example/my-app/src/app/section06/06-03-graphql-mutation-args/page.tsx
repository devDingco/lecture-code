"use client";

import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  # 타입적는곳
  mutation createBoard(
    $mywriter: String
    $mytitle: String
    $mycontents: String
  ) {
    # 전달할 변수 적는곳
    createBoard(writer: $mywriter, title: $mytitle, contents: $mycontents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    // 여기서 그래프큐엘 요청하기
    const result = await 나의함수({
      // variables 이게 $역할을 함
      variables: {
        mywriter: "훈이",
        mytitle: "안녕하세요",
        mycontents: "반갑습니다",
      },
    });
    console.log(result);
  };

  // 한 줄일때는 괄호() 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
