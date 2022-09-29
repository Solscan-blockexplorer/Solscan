import Image from "next/image";
import Link from "next/link";
import React from "react";
import Images from "../../utils/images";
import Meta from "../Meta";
import SearchBox from "../search";
import { NavigationWrapper } from "./styles";

const Navigation = () => {
  return (
    <NavigationWrapper className="header">
      <div className="header-right">
      <div className="logo">
        <Link href="/">
          <img src={Images.logoIcon} alt="logo-icon" />
        </Link>
      </div>
      <ul className="links">
        <Link href="#">Overview</Link>
        <Link href={"#"}>NFTs</Link>
        <Link href={"#"}>Deep Dive</Link>
      </ul>
      </div>
      <SearchBox/>
    </NavigationWrapper>
  );
};

export default Navigation;
