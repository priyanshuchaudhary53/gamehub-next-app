"use client";

import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import MobileMenu from "../Menu/MobileMenu";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleButtonHandler = () => {
    console.log("fdsf");
    setMobileMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <header className="h-20 w-full z-10 bg-accent fixed top-0 p-4 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tight">GameHub</div>
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
