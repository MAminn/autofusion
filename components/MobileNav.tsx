"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const links = [
  { name: "home", route: "/", offset: -100 },
  { name: "about", route: "/about", offset: -80 },
  { name: "prices", route: "prices", offset: -40 },
  { name: "blog", route: "blog", offset: 0 },
  { name: "contact", route: "contact", offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => {
        const isActive = link.route === pathname;

        return (
          <li
            className={`${
              isActive && "text-accent"
            } list-none cursor-pointer hover:text-accent transition-all text-[#333333]`}
            key={link.route}
          >
            <Link className="sidebar-link cursor-pointer" href={link.route}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default MobileNav;
