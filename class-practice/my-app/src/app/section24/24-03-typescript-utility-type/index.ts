interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
const child1: eee = ""; // 철수, 영희, 훈이만 됨
const child2: string = "사과"; // 철수, 영희, 훈이, 사과, 바나나 다 됨
console.log(child1);
console.log(child2);

type fff = Record<eee, IProfile>;

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
const myprofile: ggg = "hobby";
console.log(myprofile);

// 7. type vs interface 차이 => interface는 선언병합 가능
interface IProfile {
  candy: number;
}

const qqq: IProfile = {
  name: "철수",
  candy: 3,
  // ...
};

// 8. 배운것 응용
const profile: Partial<IProfile> = {
  candy: 10,
};
console.log(profile);
