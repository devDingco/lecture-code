"use client";

import { with로그인체크 } from "@/commons/hocs/26-02-with로그인체크";
import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링 됨
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 2. 나의함수 실행시 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링 됨
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. fetch처럼 사용하는 방법(결과는 글로벌스테이트 저장)
  // const client = useApolloClient();
  // client.query({
  //   query: FETCH_USER_LOGGED_IN,
  // });

  // const client = useApolloClient();

  // const onClickButton = async () => {
  //   // 이 안에서 API 요청
  //   const result = await client.query({
  //     query: FETCH_USER_LOGGED_IN,
  //   });
  //   console.log(result);
  // };

  // return <button onClick={onClickButton}>클릭하세요</button>;
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default with로그인체크(LoginSuccessPage);
