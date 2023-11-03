import Button from "@components/atoms/Button";
import { Modal } from "@components/organisms";
import { useEffect, useState } from "react";
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
    <div>
      <h1 className="text-3xl">Home</h1>
      <button
        onClick={() => {
          setIsShowModal(!isShowModal);
        }}
      >
        show Modal
      </button>
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
          <h1>Berhasil</h1>
          <h1 className="text-center text-xl">
            Barang Berhasil ditambahkan Kedalam Keranjang
          </h1>
        </div>
      </Modal>
      <Button />
    </div>
  );
};
