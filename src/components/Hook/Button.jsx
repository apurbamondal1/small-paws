/* eslint-disable react/prop-types */
const Button = ({
  Icon,
  text,
  varientColor,
  // size,
  // fill,
  className,
  ...props
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full border ${
        Icon && "flex items-center gap-2"
      } ${
        varientColor == "primary"
          ? "bg-[#816ecf] text-white hover:bg-[#69957f]"
          : varientColor == "secondary"
          ? "bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
          : ""
      } uppercase lg:px-5 lg:py-2 px-2 py-1  ${className} duration-200`}
      {...props}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
