"use client";

export default function Home() {
  const onClickScraping1 = async () => {
    const result = await fetch("https://www.naver.com"); // CORS 에러
    const data = await result.text();
    console.log(data);
  };

  const onClickScraping2 = async () => {
    // 1. 내가 직접 만든 프록시API
    // const result = await fetch("http://localhost:3000/mynaver2");
    // const data = await result.text();
    // console.log(data);

    // 2. Next에서 자동으로 만들어준 프록시API
    const result2 = await fetch("http://localhost:3000/mynaver3");
    const data2 = await result2.text();
    console.log(data2);
  };

  return (
    <>
      <button onClick={onClickScraping1}>스크래핑하기(프록시없이)</button>
      <br />
      <button onClick={onClickScraping2}>스크래핑하기(프록시경유)</button>
    </>
  );
}
