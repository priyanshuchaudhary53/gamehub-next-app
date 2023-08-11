import Image from "next/image";

import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

const GridItem = ({
  title,
  image,
  platforms,
}: {
  title: string;
  image: string;
  platforms: [];
}) => {
  const plat = { pc: false, ps: false, xbox: false };

  for (let index = 0; index < platforms.length; index++) {
    if (platforms[index]["platform"]["slug"] === "pc") {
      plat.pc = true;
    }
    if (
      platforms[index]["platform"]["slug"] === "playstation5" ||
      platforms[index]["platform"]["slug"] === "playstation4" ||
      platforms[index]["platform"]["slug"] === "playstation3"
    ) {
      plat.ps = true;
    }
    if (
      platforms[index]["platform"]["slug"] === "xbox-series-x" ||
      platforms[index]["platform"]["slug"] === "xbox360" ||
      platforms[index]["platform"]["slug"] === "xbox-one"
    ) {
      plat.xbox = true;
    }
  }

  return (
    <div className="group rounded-xl overflow-hidden bg-gray-700 drop-shadow-md">
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="group-hover:scale-105 duration-300 object-cover h-full w-full"
        />
      </div>
      <div className="p-3">
        <div className="flex gap-2 mt-1">
          {plat.pc && <FaWindows />}
          {plat.ps && <FaPlaystation />}
          {plat.xbox && <FaXbox />}
        </div>
        <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>
      </div>
    </div>
  );
};

export default GridItem;
