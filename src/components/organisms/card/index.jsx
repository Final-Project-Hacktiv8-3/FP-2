import { Rating } from "flowbite-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";
import { formattedPrice } from "@utils/index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "@redux/adding/action";
import { Modal } from "..";
import { BsCheck2Circle } from "react-icons/bs";

export const Card = ({ product }) => {
  const { id, title, image, price, category, rating } = product;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
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

  const handleAddToCart = (title, image, id, price, quantity) => {
    token
      ? (dispatch(addToCart(title, image, id, price, quantity)),
        setIsShowModal(!isShowModal))
      : navigate("/login");
    // dispatch(addToCart(title, image, id, price, quantity));
    // setIsShowModal(!isShowModal);
  };

  return (
    <>
      <div className="flex h-[350px] flex-col justify-between gap-y-5 rounded-lg bg-white p-4 shadow shadow-black dark:bg-transparent  dark:shadow-white lg:w-full xl:w-full">
        <Link to={`/products/${id}`}>
          <figure className="flex h-40  justify-end rounded-b-md bg-white shadow-md">
            <img
              src={`${image}`}
              className="relative flex h-full w-full justify-center  object-contain p-4 "
              alt={category}
            />
            <figcaption className="absolute flex items-end justify-end p-2 text-right">
              <h1 className="w-fit rounded-md bg-white p-2 text-black shadow-md">
                {category}
              </h1>
            </figcaption>
          </figure>
        </Link>
        <h1 className="line-clamp-2">{title}</h1>
        <div className="flex flex-row  items-center font-semibold ">
          <h1>{formattedPrice(price)}</h1>
        </div>
        <div className="flex justify-between ">
          <Rating>
            <Rating.Star />
            <p className="text-sm">{rating.rate}</p>
          </Rating>
          <button onClick={() => handleAddToCart(title, image, id, price, 1)}>
            <AiOutlineShoppingCart className="cursor-pointer text-xl" />
          </button>
        </div>
      </div>
      {/* Modal */}
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

Card.propTypes = {
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
