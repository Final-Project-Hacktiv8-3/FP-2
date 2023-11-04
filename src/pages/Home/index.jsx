import { useEffect, useState } from "react";

import { NavBar, Modal, CarouselItem, Category } from "@components/organisms";
import Button from "@components/atoms/Button";
import { BsCheck2Circle } from "react-icons/bs";

import { NavBar } from "@components";
import { Modal } from "@components/organisms";
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
    </>
  );
};
