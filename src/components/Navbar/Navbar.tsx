"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import MobileMenu from "../Menu/MobileMenu";
import SearchBar from "../Menu/SearchBar";

import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleButtonHandler = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [pathname, searchParams]);

  return (
    <>
      <header className="h-20 w-full z-10 bg-accent fixed top-0 p-4 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tight">
          <Link href="/">GameHub</Link>
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <nav className="md:hidden">
          <button
            className="text-3xl cursor-pointer"
            onClick={toggleButtonHandler}
          >
            {mobileMenuVisible ? <GrClose /> : <RxHamburgerMenu />}
          </button>
        </nav>
      </header>
      {mobileMenuVisible ? <MobileMenu /> : ""}
    </>
  );
};

export default Navbar;
