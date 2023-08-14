import React, { ReactNode } from "react";

const PageHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-left md:text-4xl lg:text-5xl lg:mt-8 font-bold text-center tracking-tight">
      {children}
    </h1>
  );
};

export default PageHeading;
