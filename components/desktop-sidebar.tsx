"use client";

import { useEffect, useState } from "react";
import type { MenuItem } from "@/types/menu";
import { useApi } from "@/lib/axios";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const DesktopSidebar = () => {
  const { get, loading } = useApi();
  const [topMenu, setTopMenu] = useState<MenuItem[]>([]);
  const [data, setData] = useState<MenuItem[]>([]);
  const [hover, setHover] = useState<MenuItem | null>(null);

  const getData = async () => {
    const res = await get<MenuItem[]>("/menu/sitegetallmenu");
    if (res) {
      setTopMenu(res.filter((item) => item.top_menu));
      setData(res.filter((item) => !item.top_menu));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="">
        <div className="flex items-center gap-1">
          {topMenu.map((e) => (
            <div
              className={`transition duration-300 ease-in-out cursor-pointer font-medium text-lg flex items-center rounded-t px-1 ${
                hover && hover.id === e.id
                  ? "bg-white text-[#01426F]"
                  : "text-white"
              }`}
              onMouseEnter={() => setHover(e)}
              onMouseLeave={() => setHover(null)}
              key={e.id}
            >
              {e.title}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  hover && hover.id === e.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        onMouseEnter={() => setHover(hover)}
        onMouseLeave={() => setHover(null)}
        className={`absolute transition-all duration-300 ease-in-out bg-white 
              lg:w-5xl xl:w-6xl 2xl:w-7xl rounded-b shadow-md
              ${hover ? "opacity-100 visible p-4" : "opacity-0 invisible"}`}
      >
        {hover && (
          <div className="w-full flex gap-2">
            <div className="flex-1">
              <div className="text-lg font-semibold text-[#01426F] flex items-center gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${hover.icon_?.url}`}
                  alt={hover.title}
                  width={50}
                  height={50}
                  className="object-cover w-10 h-auto"
                />
                <span>{hover.title}</span>
              </div>
              <div className="text-[#A6A6A6] p-2 text-md">
                {hover.description}
              </div>
            </div>
            <div className="flex-3">
              {data
                .filter((item) => item.parent_id === hover.id)
                .map((e) => (
                  <div
                    key={e.id}
                    className="hover:text-blue-600 cursor-pointer"
                  >
                    {e.title}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopSidebar;
