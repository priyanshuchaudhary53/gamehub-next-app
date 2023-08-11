import { ReactNode } from "react";

const MenuItem = ({
  children,
  title,
  expanded,
}: {
  children: ReactNode;
  title: string;
  expanded: boolean;
}) => {
  return (
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
  );
};

export default MenuItem;
