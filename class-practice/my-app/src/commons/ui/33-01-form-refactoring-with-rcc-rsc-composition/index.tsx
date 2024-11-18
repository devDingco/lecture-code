"use client"; // 클라이언트컴포넌트

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form<폼스키마 extends FieldValues>({
  children,
  schema,
  useInitialize,
}) {
  const methods = useForm<폼스키마>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { onSubmit } = useInitialize(methods);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
