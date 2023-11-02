import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

import { PiTShirt, PiDress, PiDesktop, PiSketchLogo } from "react-icons/pi";

const sizeIcon = "100%";
const categories = [
  {
    id: 1,
    name: "Men's clothing",
    image: "../category/men.png",
    icon: <PiTShirt size={sizeIcon} />,
  },
  {
    id: 2,
    name: "Women's clothing",
    image: "../category/women.png",
    icon: <PiDress size={sizeIcon} />,
  },
  {
    id: 3,
    name: "Electronics",
    image: "../category/electronic.png",
    icon: <PiDesktop size={sizeIcon} />,
  },
  {
    id: 4,
    name: "Jewelry",
    image: "../category/jewelery.png",
    icon: <PiSketchLogo size={sizeIcon} />,
  },
];

export const Category = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <h3 className="px-6 text-xl font-semibold md:px-12">Categories</h3>
      <div className="flex justify-center">
        <div className="mb-4 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-x-20">
          {categories.map((category) => {
            return (
              <Link to={`/products`} key={category.id}>
                <Card className="flex h-44 w-32 flex-col items-center justify-center overflow-hidden border-none py-2 dark:bg-primary">
                  {category.icon}
                  <span className="text-center text-sm font-semibold">
                    {category.name}
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
