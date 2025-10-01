import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100dvh - 56px)" }}>
      <Image
        src="/icons/hero/1.png"
        alt="Hero background"
        fill
        priority
        quality={80}
        className="object-cover"
      />

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1
          className="text-6xl md:text-7xl xl:text-8xl text-center py-4"
          style={{ fontFamily: "var(--font-canela), serif" }}
        >
          Transport Universiteti
        </h1>
      </div>
    </div>
  );
};

export default Hero;
