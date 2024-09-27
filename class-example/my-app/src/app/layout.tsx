import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloSetting from "@/commons/settings/06-02-apollo-setting";

const 철수의폰트 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--철수의폰트변수",
  weight: "100 900",
});
const 글로벌폰트 = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--글로벌폰트변수",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "철수의 홈페이지",
  description: "반갑습니다. 철수의 홈페이지에 오신 것을 환영합니다!",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        <div>=========여기위는 레이아웃입니다 =======</div>
        <ApolloSetting>{props.children}</ApolloSetting>
        <div>=========여기아래는 레이아웃입니다 =======</div>
      </body>
    </html>
  );
}

/*
  [ Next 실행 순서 ]

  1. 주소창에 주소 입력
     => http://localhost:3000/

  2. 입력된 주소의 폴더안의 page.tsx 찾기
     => app/page.tsx
        (ex, 주소: /mypage 라면? app/mypage/page.tsx 찾기 )

  3. 해당 페이지컴포넌트를 통째로 props에 넣어서 실행하기
  <RootLayout children={페이지컴포넌트} />
*/
