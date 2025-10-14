"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    body: data, // ✅ FormData (includes file)
  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/dashboard/manage-blog");
  }

  return result;
};
