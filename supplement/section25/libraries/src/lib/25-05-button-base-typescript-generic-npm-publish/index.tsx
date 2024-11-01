"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface IButtonBaseProps {
  children: React.ReactNode;
  className?: string;
}

// 1. 버튼뼈대 만들기
function ButtonBase<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  const { formState } = useFormContext<버튼의제네릭타입>();

  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}

// 2. 버튼 찍어내기
// 2-1) 부드러운버튼
export function ButtonSoftMFull<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  return (
    <ButtonBase<버튼의제네릭타입>
      className={styles.button__soft__m__full}
      {...props}
    />
  );
}

// // 2-2) 얇은버튼
// export function ButtonThinFitM() {
//   return <ButtonBase className={styles.button__thin__fit__m} />;
// }

// // 2-3) 둥근버튼
// export function ButtonCircleMM() {
//   return <ButtonBase className={styles.button__circle__m__m} />;
// }
