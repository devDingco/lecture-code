// 1. HOF - 함수선언식
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

//
//
// 2. HOF - 화살표함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
};

const result = first2("영희")(8);

//
//
// 2. HOC - 화살표함수
// prettier-ignore
const with로그인체크 = <C>(컴포넌트: C) => <P>(프롭스: P): [C, P] => {
    return [컴포넌트, 프롭스];
};

const result = with로그인체크("영희")(8);
