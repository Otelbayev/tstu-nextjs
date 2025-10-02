"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogIn, MenuIcon } from "lucide-react";
import { headerIcons, headerLinks } from "@/constants/home";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#025F9B] relative">
      <div className="mx-auto px-4 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex lg:hidden items-center justify-between py-2">
          <Button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-gray-100/20 hover:bg-gray-100/30"
          >
            <MenuIcon color="#ffffff" />
          </Button>

          <Link href={"/"}>
            <Image
              src={"/icons/header/1.png"}
              width={120}
              height={100}
              alt="tstu"
              className="h-10 w-auto"
            />
          </Link>
          <Link href={"/signin"}>
            <Button className="cursor-pointer bg-gray-100/20 hover:bg-gray-100/30 border-0 p-2">
              <LogIn color="#ffffff" />
            </Button>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-2">
            {headerIcons.map((item, index) => (
              <Link
                key={item.src}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                href={item.href}
                className={`cursor-pointer h-10 w-auto ${
                  index === 3 && "bg-white rounded"
                }`}
              >
                <Image
                  src={item.src}
                  width={120}
                  height={100}
                  className={`h-full w-full object-contain ${
                    index === 3 && "bg-white rounded"
                  }`}
                  alt="logos"
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {headerLinks.map((i, index) =>
              i.icon ? (
                <Link href={i.href} key={index}>
                  <Button className="cursor-pointer bg-gray-100/20 hover:bg-gray-100/30">
                    {i.icon}
                  </Button>
                </Link>
              ) : (
                <Link
                  href={i.href}
                  key={index}
                  target={i.href.startsWith("http") ? "_blank" : "_self"}
                  className="text-white text-nowrap"
                >
                  {i.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      <MobileSidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
