"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const MobileMenuDiv = (
    <div className="fixed top-0 left-0 w-full h-full bg-primary mt-20 text-white px-6 py-8">
      <div className="mb-6">
        <SearchBar />
      </div>
      <Menu expanded={true} />
    </div>
  );

  return mounted ? createPortal(MobileMenuDiv, document.body) : null;
}
