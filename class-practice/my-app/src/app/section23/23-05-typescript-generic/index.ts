import { useState } from "react";

// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);

//
//
// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result2 = getAny("철수", 123, true);

//
//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("철수", 123, true);

//
//
// 4. generic 타입
const getGeneric = <나의타입1, 나의타입2, 나의타입3>(arg1: 나의타입1, arg2: 나의타입2, arg3: 나의타입3): [나의타입3, 나의타입2, 나의타입1] => {
  return [arg3, arg2, arg1];
};
const result3 = getGeneric("철수", 123, true);

//
//
// 5. generic 타입 => 짧게
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};
const result3 = getGeneric2("철수", 123, true);

//
//
// 6. generic 타입 => 더 짧게
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result3 = getGeneric3("철수", 123, true);

//
//
// 7. generic 타입 => 함수선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result3 = getGeneric4<string, number, boolean>("철수", 123, true);
