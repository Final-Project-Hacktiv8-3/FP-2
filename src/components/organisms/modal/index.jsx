import Button from "@components/atoms/Button";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
export const Modal = ({
  showModal,
  onClose,
  children,
  modalTitle,
  modalFooter,
  modalFooterColors,
  titleColors,
  closeClassName,
  iconClose = true,
  bodyClassName = "p-6 space-y-8",
  modalHeader = true,
}) => {
  AOS.init();
  return (
    showModal &&
    createPortal(
      <div
        data-aos="fade-down"
        data-aos-duration="300"
        className="bg-primary-black fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-50 p-4 backdrop-blur-sm md:inset-0 "
      >
        <div className="w-full md:w-[60%] lg:w-[45%] xl:w-[25%]">
          <div className="relative w-full rounded-lg bg-white shadow">
            {modalHeader && (
              <div className="flex items-center justify-between rounded-t px-4 py-4 ">
                <div className={titleColors}>{modalTitle}</div>
                {iconClose && (
                  <Button size="w-10 h-10" onClick={onClose}>
                    <IoCloseSharp size={25} className={closeClassName} />
                  </Button>
                )}
              </div>
            )}
            <div
              data-aos="zoom-in-down"
              data-aos-duration="300"
              className={bodyClassName}
            >
              {children}
            </div>
            {modalFooter && <div className={modalFooterColors}></div>}
          </div>
        </div>
      </div>,
      document.body,
    )
  );
};
Modal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.bool,
  children: PropTypes.node,
  modalTitle: PropTypes.string,
  modalFooter: PropTypes.node,
  modalFooterColors: PropTypes.string,
  modalHeaderColors: PropTypes.string,
  titleColors: PropTypes.string,
  closeClassName: PropTypes.string,
  iconClose: PropTypes.bool,
  bodyClassName: PropTypes.string,
};
