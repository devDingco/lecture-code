import { useState } from "react";

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

const TypescriptStateExample = () => {
  // 타입추론
  const [age, setAge] = useState(12);
  setAge("12살");

  // 타입명시
  const [school, setSchool] = useState<string>("");

  // 타입명시를 해야하는 상황
  const [profile, setProfile] = useState<IProfile>({
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  });

  setProfile({
    name: "훈이",
    age: "12살",
    school: "공룡초등학교",
    hobby: "수영",
  });

  return <></>;
};
