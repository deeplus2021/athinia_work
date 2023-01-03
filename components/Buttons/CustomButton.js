import Link from "next/link";

const CustomButton = ({
  paddingX,
  paddingY,
  wrapperClass,
  background,
  text,
  extraClass,
  link,

  onClickHandler,
  isInternal = false,
  target = "",
}) => {
  const paddingTopX = paddingX ? paddingX : "px-10";
  const paddingTopY = paddingY ? paddingY : "py-5";

  if (isInternal) {
    return (
      <div className={wrapperClass}>
        <Link
          href={link}
          className={`text-xl ${background} font-medium  ${paddingTopX} ${paddingTopY} ${extraClass} hover:cursor-pointer  block  xl:inline `}
        >
          {text}
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <a
        onClick={onClickHandler}
        target={target}
        href={link}
        className={`text-xl ${background} font-medium  ${paddingTopX} ${paddingTopY} ${extraClass} hover:cursor-pointer  block  lg:inline `}
      >
        {text}
      </a>
    </div>
  );
};

export default CustomButton;
