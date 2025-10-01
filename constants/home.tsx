import { Eye, LogIn, Search } from "lucide-react";

export const headerIcons = [
  {
    src: "/icons/header/1.png",
    href: "/",
  },
  {
    src: "/icons/header/2.png",
    href: "/endowment",
  },
  {
    src: "/icons/header/3.png",
    href: "https://www.timeshighereducation.com/world-university-rankings/tashkent-state-transport-university",
  },
  {
    src: "/icons/header/4.svg",
    href: "https://www.topuniversities.com/universities/tashkent-state-transport-university",
  },
];

export const headerLinks = [
  {
    name: "Davlat Ramzlari",
    href: "/page/191",
    icon: "",
  },
  {
    name: "Talaba",
    href: "https://student.tstu.uz/dashboard/login",
    icon: "",
  },
  {
    name: "Xodim",
    href: "https://hemis.tstu.uz/dashboard/login",
    icon: "",
  },
  {
    name: "Elektron Kutubxona",
    href: "http://lib.tstu.uz/jirbis2/",
    icon: "",
  },
  {
    name: "Alumni",
    href: "https://alumni.tstu.uz/",
    icon: "",
  },
  {
    name: "",
    href: "",
    icon: <Eye />,
  },
  {
    name: "",
    href: "/search",
    icon: <Search />,
  },
  {
    name: "",
    href: "/signin",
    icon: <LogIn />,
  },
];
