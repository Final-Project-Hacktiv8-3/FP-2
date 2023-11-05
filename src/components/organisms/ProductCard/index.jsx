import PropTypes from "prop-types";
import { Badge, Card, Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { formattedPrice } from "@utils";
import { useEffect, useState } from "react";
import { Modal } from "..";
import { BsCheck2Circle } from "react-icons/bs";

export const ProductCard = ({ product }) => {
  const { id, title, image, price, category, rating } = product;
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (isShowModal === true) {
      const timeout = setTimeout(() => {
        setIsShowModal(false);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isShowModal]);

  const handleAddToCart = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
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
            <button onClick={handleAddToCart}>
              <PiShoppingCart className="mr-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>

      <div>
        <Modal
          modalHeader={false}
          iconClose={true}
          onClose={() => {
            setIsShowModal(!isShowModal);
          }}
          showModal={isShowModal}
        >
          <div className="flex flex-col items-center justify-center gap-y-4 px-5">
            <BsCheck2Circle className="text-5xl text-emerald-600" />
            <h1 className="text-center text-xl text-slate-900">Berhasil</h1>
            <h1 className="text-center text-xl text-slate-900">
              Barang Berhasil ditambahkan Kedalam Keranjang
            </h1>
          </div>
        </Modal>
      </div>
    </>
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
