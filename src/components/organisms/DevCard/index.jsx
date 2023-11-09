import { PiGithubLogoBold } from "react-icons/pi";
import PropTypes from "prop-types";

export const DevCard = ({ data }) => {
  const { name, id, university, image, social } = data;

  return (
    <div className="flex h-[300px] w-60 flex-col rounded-lg shadow-md shadow-black">
      <div className="flex items-center justify-center">
        <figure className="h-36 w-36">
          <img
            src={image}
            alt={`Image of ${name}`}
            className="h-full w-full rounded-full object-cover"
          />
        </figure>
      </div>
      <div className="my-2 text-center">
        <p className="mb-2 text-lg font-bold">{name}</p>
        <div className="text-sm text-slate-600">
          <p>{id}</p>
          <p>{university}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-x-4">
        <a href={social[0].link} target="_blank" rel="noreferrer">
          <PiGithubLogoBold size="28" />
        </a>
      </div>
    </div>
  );
};

DevCard.propTypes = {
  data: PropTypes.object,
};
