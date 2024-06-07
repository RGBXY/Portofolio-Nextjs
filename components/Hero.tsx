import React from "react";
import { chakra } from "@/components/ui/fonts";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HoverBorderGradient } from "./ui/Button";
import { ImConfused } from "react-icons/im";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[50rem] lg:h-screen flex justify-center items-center gap-12 relative">
      <div className="h-full pt-20 absolute w-full dark:bg-black bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.02] flex items-center justify-center flex-col-reverse lg:flex-row lg:gap-12">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-end lg:border-r-4 lg:h-[380px] pl-4 pr-4 w-full lg:w-[400px] flex justify-center items-end flex-col lg:pl-0 lg:pr-10">
          <TextGenerateEffect className={`${chakra.className} text-4xl lg:text-[2.8rem] font-bold mb-2`} words="Hi, welcome to my . portofolio Derren Amadeo" />
          <TextGenerateEffect className="font-semibold mb-5" words="Fullstack Developer" />
          <Link href={"/home"}>
            <HoverBorderGradient containerClassName="rounded-xl" as="button" className="">
              <span className="flex items-center gap-2">
                <ImConfused />
                My Work?
              </span>
            </HoverBorderGradient>
          </Link>
        </div>
        <div className="w-full h-[350px] lg:h-[380px] px-4 lg:w-[300px]">
          <img className="w-full h-full object-cover" src={"/assets/profil.jpg"} alt="iyah" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
