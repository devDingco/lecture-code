"use client";

import { useFormContext, FieldValues, Path } from "react-hook-form";
import styles from "./styles.module.css";
import { HTMLInputTypeAttribute, useState } from "react";

interface IInputBaseProps<프롭스의제네릭타입> {
  className?: string;
  type: HTMLInputTypeAttribute;
  keyname: Path<프롭스의제네릭타입>;
}

// 1. 뼈대만들기
function InputBase<나의제네릭타입 extends FieldValues>(
  props: IInputBaseProps<나의제네릭타입>
) {
  const { register } = useFormContext<나의제네릭타입>();

  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyname)}
    />
  );
}

// 2. 인풋 찍기
export function InputSoftSFull<인풋의제네릭타입 extends FieldValues>(
  props: IInputBaseProps<인풋의제네릭타입>
) {
  // const [] = useState<인풋의제네릭타입>();

  return (
    <InputBase<인풋의제네릭타입>
      className={styles.input__soft__s__full}
      {...props}
    />
  );
}
