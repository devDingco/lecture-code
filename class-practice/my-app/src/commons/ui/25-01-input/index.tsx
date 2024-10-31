"use client";

import { useFormContext } from "react-hook-form";

export default function MyInput(props) {
  const { register } = useFormContext();

  return <input type={props.type} {...register(props.keyname)} />;
}
