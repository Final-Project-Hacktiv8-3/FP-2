import PropTypes from "prop-types";
const Button = ({
  children,
  className,
  disabled,
  size = "h-10 w-28",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 transition-all ${className} ${size}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
