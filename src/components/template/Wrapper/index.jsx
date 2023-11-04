import PropTypes from "prop-types";

export const Wrapper = ({ children }) => {
  return <main className="container mx-auto flex flex-col">{children}</main>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
