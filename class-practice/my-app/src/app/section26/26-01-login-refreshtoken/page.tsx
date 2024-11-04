"use client";

import { useAccessTokenStore } from "@/commons/stores/22-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
    const result = await loginUserExample({
      variables: {
        email: "aaaa4444@a.com",
        password: "1234",
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    console.log(accessToken);

    // 2. 받아온 accessToken을 globalState에 저장하기
    if (accessToken === undefined) {
      alert("로그인에 실패했습니다! 다시 시도해 주세요!");
    }
    setAccessToken(accessToken);
    // localStorage.setItem("accessToken", accessToken); => 더 이상 사용하지 않음(refreshToken 사용)

    // 3. 로그인 성공 페이지로 이동하기
    router.push("/section26/26-01-login-refreshtoken-success");
  };

  return (
    <>
      이메일: <input type="text" />
      비밀번호: <input type="password" />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
