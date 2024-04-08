"use server";

import { redirect } from "next/navigation";

export async function postAction(
  prev: any,
  formData: FormData
): Promise<{ errors?: { name: string } }> {
  const name = formData.get("name");
  if (!name) {
    return {
      errors: {
        name: "名前を入力してください",
      },
    };
  }
  redirect("/simple/thanks");
}
