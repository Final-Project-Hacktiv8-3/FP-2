import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TxtSide = ({ title, desc, txtBtn, id }) => {
  return (
    <div className="flex flex-col justify-center lg:w-2/5">
      <h2 className="text-4xl font-bold">{title || "Title"}</h2>
      <p className="my-3 text-base">{desc || "Description"}</p>
      <button className="bg-color mt-4 rounded-none px-4 py-2 text-primary">
        <Link to={`/products/${id}`}>{txtBtn || "Discover Now"}</Link>
      </button>
    </div>
  );
};

const ImgSide = ({ src }) => {
  return (
    <div className="flex w-1/3 justify-center self-center">
      <img src={src} alt="" className="w-52" />
    </div>
  );
};

export const HeroProduct = ({ id, src, title, desc, txtBtn, side }) => {
  return (
    <div className="mt-16 flex flex-col justify-around px-10 py-12 lg:flex-row">
      {side === true ? (
        <>
          <TxtSide id={id} title={title} desc={desc} txtBtn={txtBtn} />
          <ImgSide src={src} />
        </>
      ) : (
        <>
          <ImgSide src={src} />
          <TxtSide id={id} title={title} desc={desc} txtBtn={txtBtn} />
        </>
      )}
    </div>
  );
};

TxtSide.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  txtBtn: PropTypes.string,
  id: PropTypes.number,
};

ImgSide.propTypes = {
  src: PropTypes.string,
};

HeroProduct.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  txtBtn: PropTypes.string,
  side: PropTypes.bool,
};
