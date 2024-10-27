"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import LinkButton from '../atoms/LinkButton'
import MagicBordersButton from "./MagicBordersButton";
import ShimmerButton from "./ShimmerButton";
import OutlineButton from "./OutlineButton";
import { ArrowRight } from "lucide-react";

export default function LandingPageLogo() {
  return (
    <>
      <section className="h-96 my-36 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
          FUTURE
        </h1>
        <p className="text-center text-white text-lg font-semibold -mt-4">
          Breaking the boundaries of the technology
        </p>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <h2 className="absolute inset-x-32 ml-2 w-96 flex justify-center items-center top-4 h-10 z-20" >
            <MagicBordersButton
              text="Start shopping now"
            />
          </h2>
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-ebony-clay-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </section>
      
    </>
  );
}
