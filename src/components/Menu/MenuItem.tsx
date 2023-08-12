import Link from "next/link";
import { ReactNode } from "react";

const MenuItem = ({
  children,
  title,
  expanded,
  link,
}: {
  children: ReactNode;
  title: string;
  expanded: boolean;
  link: string;
}) => {
  return (
    <Link href={link}>
      <li className="group flex items-center gap-4 cursor-pointer">
        <span className="text-3xl bg-gray-600 p-2 rounded block float-left duration-300 group-hover:bg-gray-500">
          {children}
        </span>
        <div
          className={`flex-1 text-lg min-w-[150px] w-20 font-bold origin-left duration-300 mr-6 tracking-tight text-white ${
            !expanded && "scale-0"
          }`}
        >
          {title}
        </div>
      </li>
    </Link>
  );
};

export default MenuItem;
