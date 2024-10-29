"use client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderSettingLocalStorage(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log(
  //     "나는 지금 프론트엔드 서버다!!!(즉, yarn dev 프로그램 내부이다!!)"
  //   );
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log(
  //     "나는 지금 프론트엔드 서버다!!!(즉, yarn dev 프로그램 내부이다!!)"
  //   );
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken") ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://main-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),

    // cache: new InMemoryCache(), // => accessToken이 변경돼서 리렌더될 때 새로만들어짐
    cache: GLOBAL_STATE, // => 컴포넌트는 새로 만들어져도, globalState는 유지됨
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
