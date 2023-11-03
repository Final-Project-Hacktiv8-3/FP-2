import PropTypes from "prop-types";
import { Badge, Card, Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { formattedPrice } from "@utils";

export const ProductCard = ({ product }) => {
  const { id, title, image, price, category, rating } = product;

  return (
    <Card
      className="relative max-h-min w-full max-w-[240px] overflow-hidden border-none bg-primary text-primary dark:bg-primary dark:text-primary"
      renderImage={() => (
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} className="h-40 w-full object-cover" />
        </Link>
      )}
    >
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col">
          <Badge className="absolute right-2 top-2" color="gray">
            {category}
          </Badge>
          <Link to={`/products/${id}`}>
            <h5 className="line-clamp-2 text-sm tracking-tight">{title}</h5>
          </Link>
          <p className="text-lg font-bold">{formattedPrice(price)}</p>
        </div>
        <div className="flex items-center justify-between">
          <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm">{rating.rate}</p>
          </Rating>
          <button>
            <PiShoppingCart className="mr-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};
