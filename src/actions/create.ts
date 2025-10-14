"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const createBlog = async (data: FormData) => {
  try {
    // ✅ Get accessToken from cookies (sent by backend on login)
    const accessToken = (await cookies()).get('accessToken')?.value

    if (!accessToken) {
      throw new Error("You must be logged in to create a blog");
    }

    // ✅ Send the form data to your backend API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/create`, {
      method: "POST",
      body: data,
      credentials: "include", // include cookies in request
      headers: {
        Authorization: `Bearer ${accessToken}`, // include token if required
      },
    });

    const result = await res.json();

    // ✅ On success, revalidate and redirect
    if (result?.id) {
      revalidateTag("BLOGS");
      revalidatePath("/blogs");
      redirect("/");
    }

    return result;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating blog:", error.message);
    return { success: false, message: error.message };
  }
};
