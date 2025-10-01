import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { headerIcons, headerLinks } from "@/constants/home";
import { X } from "lucide-react";
import * as React from "react";

const MobileSidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={() => setOpen(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 h-full w-full z-99 bg-[#025F9B] text-white shadow-lg p-4 flex flex-col transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <Image
              src={"/icons/header/1.png"}
              width={120}
              height={100}
              alt="tstu"
              className="h-10 w-auto"
            />
          </Link>
          <Button
            className="cursor-pointer bg-gray-100/20 hover:bg-gray-100/30"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <div className="flex gap-3 justify-between mb-2">
          {headerIcons.map(
            (item, index) =>
              index !== 0 && (
                <Link
                  key={item.src}
                  onClick={() => setOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  href={item.href}
                  className="h-10 w-full flex items-center justify-between bg-white/10 p-1 rounded"
                >
                  <Image
                    src={item.src}
                    width={120}
                    height={100}
                    className="h-full w-full object-contain"
                    alt="logos"
                  />
                </Link>
              )
          )}
        </div>
        <div className="flex gap-3 justify-between">
          {headerLinks.map(
            (i, index) =>
              i.icon &&
              index !== 7 && (
                <Link
                  href={i.href}
                  className="w-full cursor-pointer"
                  key={index}
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full flex items-center bg-white/10 hover:bg-white/20 justify-center text-white border-0">
                    {i.icon}
                  </Button>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
