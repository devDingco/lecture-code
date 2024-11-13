"use client";

export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    const result = await fetch("http://localhost:3000/section19/19-01-search"); // CORS문제: https://www.naver.com
    const data = await result.text();
    console.log(data);
  };

  return <button onClick={onClickScraping}>긁어오기</button>;
}
