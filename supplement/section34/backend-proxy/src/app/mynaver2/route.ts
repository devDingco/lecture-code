export async function GET() {
  console.log("Next 서버에 요청했군요!");
  console.log(
    "저는 지금 백엔드(http://localhost:3000/mynaver1)처럼 사용되고 있습니다!"
  );

  const result = await fetch("https://www.naver.com");
  const data = await result.text();

  // Next서버를 백엔드처럼 사용하여 API로 브라우저에 JSON 데이터 보내기
  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}
