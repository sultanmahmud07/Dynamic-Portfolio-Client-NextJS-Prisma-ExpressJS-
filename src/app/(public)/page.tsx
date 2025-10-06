import Home from "@/components/modules/Home/Home";

export default async function Page() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
  //   next: {
  //     tags: ["BLOGS"],
  //   },
  // });
  // const { data: blogs } = await res.json();

  return (
    <Home></Home>
  );
}
