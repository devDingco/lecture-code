"use client";

export default function RccWithNoCachePage() {
  const onClickButton = async () => {
    await fetch("https://koreanjson.com/posts/1");
    console.log("요청이 완료되었습니다.");
  };

  return <button onClick={onClickButton}>요청하기</button>;
}
