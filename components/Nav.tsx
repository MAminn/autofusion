"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", route: "/", offset: -100 },
  { name: "about", route: "about", offset: -80 },
  { name: "prices", route: "prices", offset: -40 },
  { name: "blog", route: "blog", offset: 0 },
  { name: "contact", route: "contact", offset: 0 },
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
            className={` list-none cursor-pointer hover:text-accent transition-all ${
              isActive ? "text-accent" : " text-[#333333]"
            }`}
          >
            <Link className="sidebar-link" href={link.route}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Nav;
