import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100dvh - 56px)" }}>
      <Image
        src="/icons/hero/1.png"
        alt="Hero background desktop"
        fill
        priority
        quality={80}
        className="object-cover hidden md:block"
      />

      <Image
        src="/icons/hero/2.png"
        alt="Hero background mobile"
        fill
        priority
        quality={100}
        className="object-cover mt-15 z-5 md:hidden"
      />

      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#0061A5] to-[#004B7D]"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1
          className="text-6xl md:text-7xl xl:text-8xl text-center px-4"
          style={{ fontFamily: "var(--font-canela), serif" }}
        >
          Transport Universiteti
        </h1>
      </div>
    </div>
  );
};

export default Hero;
