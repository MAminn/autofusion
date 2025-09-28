"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", route: "/", offset: -100 },
  { name: "pages", route: "/about", offset: -80 },
  { name: "elements", route: "/services", offset: -40 },
  { name: "portfolios", route: "/portfolio", offset: 0 },
  { name: "blogs", route: "/blog", offset: 0 },
  { name: "shop", route: "/shop", offset: 0 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => {
        const isActive = link.route === pathname;

        return (
          <li
            key={link.route}
            className={`list-none cursor-pointer hover:text-white/70 transition-all duration-300 ${
              isActive ? "text-white" : "text-white/90"
            }`}>
            <Link className='relative group' href={link.route}>
              {link.name}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Nav;
