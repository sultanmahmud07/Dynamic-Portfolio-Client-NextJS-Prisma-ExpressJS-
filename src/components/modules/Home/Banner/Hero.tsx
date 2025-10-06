import Image from "next/image";
import Link from "next/link";
import heroImage from "@@/home/hero-image.png"
import { Button } from "@/components/ui/button";
export default async function Hero() {
  return (
    <section className="bg-secondary relative pt-[140px] pb-[125px]">
      <div className="main-container">
        <div className="grid grid-cols-1 2xl:-mx-4">
          <div className="xl:pt-12">
            <span className="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3 aos-init aos-animate">
              {/* <span className="mr-6"></span> */}


              Hello, I’m

            </span>
            <h1 className="relative z-[1] font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px] aos-init aos-animate">Sultan</h1>
            <h2 className="font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px] aos-init aos-animate">Mahmud</h2>
            <p className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px] aos-init aos-animate">Product
              Developer |
              Based in
              Bangladeshi</p>
            <div className="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
<Link href="/contact">
<Button size="xl" className="flex seco items-center flex-wrap gap-3 mr-2 group font-bold ">
  Let&apos;s Talk
<span className="">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
</span>
</Button>
</Link>
<Link href="/contact">
<Button size="xl" variant="outline" className="flex seco items-center flex-wrap gap-3 mr-2 group font-bold ">
  My Work
<span className="">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
</span>
</Button>
</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
          alt="hero-image"
            src={heroImage}
            width={1000}
            className="absolute top-0 right-0 md:max-w-[420px] lg:max-w-[570px] xl:max-w-[650px] 2xl:max-w-[initial] aos-init aos-animate"
          />
        </div>
      </div>
    </section>
  );
}
