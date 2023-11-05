import { Rating } from "flowbite-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import PropTypes from "prop-types";
export const Card = ({ onClick, image, title, price, rating, category }) => {
  return (
    <div className="flex h-[350px] flex-col justify-between gap-y-5 rounded-lg bg-white p-4 shadow shadow-black dark:bg-transparent  dark:shadow-white lg:w-48 xl:w-full">
      <figure className="flex h-40  justify-end rounded-b-md bg-white shadow-md">
        <img
          src={`${image}`}
          className="relative flex h-full w-full justify-center  object-contain p-4 "
          alt=""
        />
        <figcaption className="absolute flex items-end justify-end p-2 text-right">
          <h1 className="w-fit rounded-md bg-white p-2 text-black shadow-md">
            {category}
          </h1>
        </figcaption>
      </figure>
      <h1>{title}</h1>
      <div className="flex flex-row  items-center font-semibold ">
        <BsCurrencyDollar />
        <h1>{price}</h1>
      </div>
      <div className="flex justify-between ">
        <Rating>
          <Rating.Star />
          <p className="text-sm">{rating}</p>
        </Rating>
        <AiOutlineShoppingCart
          className="cursor-pointer text-xl"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
Card.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.string,
};
