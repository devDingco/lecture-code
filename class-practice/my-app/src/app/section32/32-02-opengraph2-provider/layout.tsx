"use client";

export default function OpengraphProviderLayout({ children }) {
  return (
    <>
      <meta property="og:title" content="여행마켓" />
      <meta
        property="og:description"
        content="나의 여행마켓에 오신 것을 환영합니다!"
      />
      <meta property="og:image" content="http://~~~~" />
      <>{children}</>
    </>
  );
}
