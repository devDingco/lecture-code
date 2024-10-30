"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const with로그인체크 =
  (컴포넌트: () => JSX.Element) =>
  <P extends object>(프롭스: P) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니다!!!");
        router.push("/section23/23-04-login-localstorage-check-hoc");
      }
    }, []);

    return <컴포넌트 {...프롭스} />;
  };

function QQQPage() {
  return <div></div>;
}

with로그인체크(QQQPage)({ bbb: "철수" });
