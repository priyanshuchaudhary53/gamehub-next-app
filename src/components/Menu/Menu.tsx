import MenuItem from "./MenuItem";
import { IoHome } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { BiSolidTrophy } from "react-icons/bi";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

const MenuItems = [
  {
    id: "m1",
    title: "Home",
    link: "/",
    icon: <IoHome />,
  },
  {
    id: "m2",
    title: "New Release",
    link: "/",
    icon: <AiFillStar />,
  },
  {
    id: "m3",
    title: "Best of the year",
    link: "/",
    icon: <BiSolidTrophy />,
  },
  {
    id: "m4",
    title: "PC",
    link: "/",
    icon: <FaWindows />,
  },
  {
    id: "m5",
    title: "PlayStation",
    link: "/",
    icon: <FaPlaystation />,
  },
  {
    id: "m6",
    title: "Xbox",
    link: "/",
    icon: <FaXbox />,
  },
];

const Menu = ({ expanded }: { expanded: boolean }) => {
  return (
    <div className="">
      <ul className="flex flex-col gap-6 pt-4">
        {MenuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            expanded={expanded}
            link={item.link}
          >
            {item.icon}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
