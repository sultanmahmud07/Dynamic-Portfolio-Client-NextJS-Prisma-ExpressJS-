

export const getAllBlogs = async  ({ limit }: { limit?: number }) =>{
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/post?page=1&limit=${limit || 30}`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
    throw new Error("There was an error fetching All Blog Data!");
  }
}
export const getBlogBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/post/${slug}`
    );

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
    throw new Error("There was an error fetching Blog details Data!");
  }
}

