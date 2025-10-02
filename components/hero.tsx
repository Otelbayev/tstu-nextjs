import React from "react";
import Image from "next/image";
import DesktopSidebar from "./desktop-sidebar";

const Hero = () => {
  return (
    <section
      className="relative w-full"
      style={{ height: "calc(100dvh - 56px)" }}
    >
      <Image
        src="/icons/hero/1.png"
        alt="Hero background desktop"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover hidden md:block"
      />
      <Image
        src="/icons/hero/2.png"
        alt="Hero background mobile"
        width={780}
        height={1308}
        priority
        className="absolute object-cover md:hidden w-full pt-15  bg-[#0061A5]"
      />

      <div className="relative hidden lg:flex z-50 mx-auto px-4 translate-y-6 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <DesktopSidebar />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1
          className="text-6xl md:text-7xl xl:text-8xl text-center px-4"
          style={{
            fontFamily: "var(--font-canela), serif",
          }}
        >
          Transport Universiteti
        </h1>
      </div>
    </section>
  );
};

export default Hero;
