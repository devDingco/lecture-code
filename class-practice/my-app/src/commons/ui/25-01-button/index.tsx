"use client";

import { useFormContext } from "react-hook-form";

export default function MyButton(props) {
  const { formState } = useFormContext();

  return <button disabled={!formState.isValid}>{props.children}</button>;
}
