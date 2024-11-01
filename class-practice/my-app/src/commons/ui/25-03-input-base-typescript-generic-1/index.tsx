"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { useState } from "react";

// 1. 뼈대만들기
function InputBase(props) {
  const { register } = useFormContext();

  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyname)}
    />
  );
}

// 2. 인풋 찍기
export function InputSoftSFull<인풋의제네릭타입>(props) {
  const [] = useState<인풋의제네릭타입>();

  return <InputBase className={styles.input__soft__s__full} {...props} />;
}
