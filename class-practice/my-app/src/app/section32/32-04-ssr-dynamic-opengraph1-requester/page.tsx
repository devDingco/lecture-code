"use client";

// 요청자관점 => 카카오톡개발자, 슬랙개발자 등
export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    // 1. 채팅문자열에 주소가 있는지 찾기(ex, http~로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const 상품ID = "6731b34e9712e0002973f144";
    const result = await fetch(
      `http://localhost:3000/section32/32-04-ssr-dynamic-opengraph2-provider/${상품ID}` // CORS문제: https://www.naver.com
    );
    const data = await result.text();
    console.log(data);

    // 3. 메타태그에서 오픈그래프(og:~~) 찾기
    const resultOg = data
      .split("<meta")
      .filter((el) => el.includes('property="og:'));
    console.log(resultOg);
  };

  return <button onClick={onClickScraping}>채팅 입력 후 엔터치기!!</button>;
}
