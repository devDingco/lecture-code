"use client";

import { with로그인체크 } from "@/commons/hocs/23-04-with로그인체크";
import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default with로그인체크(LoginSuccessPage);
