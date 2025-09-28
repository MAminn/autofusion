"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const links = [
  { name: "home", route: "/", offset: -100 },
  { name: "pages", route: "/about", offset: -80 },
  { name: "elements", route: "/services", offset: -40 },
  { name: "portfolios", route: "/portfolio", offset: 0 },
  { name: "blogs", route: "/blog", offset: 0 },
  { name: "shop", route: "/shop", offset: 0 },
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
              isActive && "text-white"
            } list-none cursor-pointer hover:text-white/70 transition-all text-white/90`}
            key={link.route}>
            <Link className='sidebar-link cursor-pointer' href={link.route}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default MobileNav;
