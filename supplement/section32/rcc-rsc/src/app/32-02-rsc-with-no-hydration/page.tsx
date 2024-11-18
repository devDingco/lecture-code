// "use client"; => 서버컴포넌트

// export const revalidate = 10; // 몇 초 동안 임시저장(캐시) 할건지 적기 => 기본값 1년(31536000초)

export default function RscWithCachePage() {
  // await fetch("https://koreanjson.com/posts/1"); // 클라이언트컴포넌트 자체에 async 못 붙임
  console.log("요청이 완료되었습니다.");

  return <button>요청하기</button>;
}

// 1. 모든컴포넌트를 RCC로 하면 안좋은 이유
//    - 불필요한 하이드레이션 발생 => "요청이 완료되었습니다." 브라우저에서 재실행됨
//    - 불필요한 하이드레이션을 위한 코드조각 다운로드로 인한 용량 증가

// 2. 모든컴포넌트를 RSC로 할 수 없는 이유
//    - onClick, onChange, useState, useEffect, useQuery 등은 브라우저에서 실행되어야 함
//      => 사실상 과거 React17에서는 모든 컴포넌트가 RCC
//    - 브라우저에서 react-query, apollo-client 등의 글로벌스테이트 캐시를 못 함
//      => Q) 브라우저에서 글로벌스테이트 캐시를 꼭 써야하나요??
//            그냥 next 서버사이드에서 제공하는 fetch의 캐시를 쓰면 안되나요?
//      => A) 캐시 직접 수정, 옵티미스틱UI, 로그인 유저벌 캐시내용 다르게 처리 등 유연한 캐시를 위해서 있어야됨
//            => 따라서, next 서버사이드에서 제공하는 fetch의 캐시는 전략적으로 활용할 것
