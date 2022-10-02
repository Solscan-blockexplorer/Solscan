import Image from "next/image";
import Link from "next/link";
import React from "react";
import Images from "../../utils/images";
import SearchBox from "../search";
import { NavigationWrapper } from "./styles";
import { useRouter } from "next/router";

interface LinkProps {
  pathname: string;
  href: string;
}
const links: LinkProps[] = [
  { pathname: "Overview", href: "/" },
  { pathname: "NFTS", href: "/nfts" },
  { pathname: "Deep Dive", href: "/deep-dive" },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <NavigationWrapper className="header">
      <div className="header-right">
        <div className="logo">
          <Link href="/">
            <img src={Images.logoIcon} alt="logo-icon" />
          </Link>
        </div>
        <ul className="links">
          {links.map((link: LinkProps) => (
            <Link href={link.href} passHref key={link.href}>
              <a
                className={
                  router.pathname === link.href ? "active" : "non-active"
                }
              >
                {link.pathname}
              </a>
            </Link>
          ))}
        </ul>
      </div>
      <SearchBox />
    </NavigationWrapper>
  );
};

export default Navigation;
