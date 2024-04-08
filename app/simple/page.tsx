"use client";

import { postAction } from "@/app/simple/postAction";
import { useFormState, useFormStatus } from "react-dom";

function Submit() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "送信中..." : "送信"}
    </button>
  );
}

export default function Page() {
  const [result, dispatch] = useFormState(postAction, {});

  return (
    <form action={dispatch}>
      {result.errors && <div>{result.errors.name}</div>}
      <input type="text" name="name" />
      <Submit />
    </form>
  );
}
