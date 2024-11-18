// "use client"; => 서버컴포넌트

export const revalidate = 10; // 몇 초 동안 임시저장(캐시) 할건지 적기 => 기본값 1년(31536000초)

export default async function RscWithCachePage() {
  await fetch("https://koreanjson.com/posts/1"); // .next 폴더에 결과가 임시저장(캐시) 되어있으므로 2번째 실행부터 API 요청 안감
  console.log("요청이 완료되었습니다.");

  return <button>요청하기</button>;
}
