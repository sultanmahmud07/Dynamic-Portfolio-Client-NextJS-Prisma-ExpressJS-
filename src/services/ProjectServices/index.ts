

export const getAllProjects = async  ({ limit }: { limit?: number }) =>{
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project?page=1&limit=${limit || 30}`,
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
    throw new Error("There was an error fetching All Project Data!");
  }
}
export const getProjectBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${slug}`
    );

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error:", error);
    }
    throw new Error("There was an error fetching Project details Data!");
  }
}

