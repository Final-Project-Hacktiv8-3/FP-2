import PropTypes from "prop-types";
import { formattedPrice } from "@utils/index";
import { PiShoppingCartSimple } from "react-icons/pi";
import Button from "@components/atoms/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@components/organisms";
import { BsCheck2Circle } from "react-icons/bs";
import { addToCart } from "../../../redux/adding/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DetailProduct = ({ product }) => {
  const { title, description, image, price } = product;
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const latest = useSelector((state) => state.latestUpdate);
  const [isShowModal, setIsShowModal] = useState(false);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  /*TODO: handle add to cart from redux*/
  const handleAddToCart = (title,image,id,price,stuff) => {
    // if(stuff !== 0){
      dispatch(addToCart(title,image,id,price,stuff));
    // }
     
    setIsShowModal(!isShowModal);
  };




  return (
    <>
      <article className="flex flex-col gap-x-10 gap-y-5 px-6 md:flex-row md:px-12">
        <div className="flex w-full items-center justify-center md:w-1/3">
          <img
            src={image}
            alt={title}
            width={220}
            height={220}
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="my-5 text-xl font-semibold text-primary md:text-3xl">
            {title}
          </h1>
          <div className="flex items-center gap-x-12 text-2xl font-bold md:text-4xl">
            <h2 className="">{formattedPrice(price)}</h2>
            <div className="text-sm font-semibold md:text-lg">
              {latest.latest.map((dataLatest) => (
                <div key={dataLatest.id}>
                  {dataLatest.id === product.id && (
                    <span>Stock: {dataLatest.quantity}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="my-3">{description}</p>
          <div>
            <div className="flex w-max flex-col gap-y-2">
              <span className="self-center">Quantity:</span>
              <div className="flex items-center gap-x-3">
                <Button
                  className="bg-color hover:bg-accent disabled:opacity-60"
                  size="w-fit"
                  onClick={() => setCurrentQuantity((prev) => prev - 1)}
                  disabled={currentQuantity === 1}
                >
                  -
                </Button>
                <span className="text-lg font-semibold">{currentQuantity}</span>
                <Button
                  className="bg-color hover:bg-accent"
                  size="w-fit"
                  onClick={() => setCurrentQuantity((prev) => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            {token ? (
            <Button
              className="bg-color mt-4 flex w-full items-center justify-center gap-4 text-lg font-semibold hover:bg-accent"
              onClick={() =>handleAddToCart(product?.title,product?.image,product?.id,product?.price,currentQuantity)}
            >
              <PiShoppingCartSimple size={24} /> Add to Cart
            </Button>

            ):(
              <Button
              className="bg-color mt-4 flex w-full items-center justify-center gap-4 text-lg font-semibold hover:bg-accent"
              onClick={() => navigate('/login')}
            >
              <PiShoppingCartSimple size={24} /> Add to Cart
            </Button>
            )}
          </div>
        </div>
      </article>
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

DetailProduct.propTypes = {
  product: PropTypes.object,
};
