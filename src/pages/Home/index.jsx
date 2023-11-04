import { useEffect, useState } from "react";

import {
  NavBar,
  Modal,
  CarouselItem,
  Category,
  HeroProduct,
} from "@components/organisms";
import Button from "@components/atoms/Button";
import { BsCheck2Circle } from "react-icons/bs";

export const Home = () => {
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

  return (
    <>
      <NavBar />
      <CarouselItem />
      <Category />
      <Button onClick={() => setIsShowModal(!isShowModal)}>Show Modal</Button>
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

      <HeroProduct
        id={5}
        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
        desc="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
      />
      <HeroProduct
        side
        id={12}
        src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
        desc="Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty"
        txtBtn="See Product"
      />
    </>
  );
};
