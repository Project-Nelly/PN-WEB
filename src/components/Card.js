import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  img,
  nellyAndLeeWanLikLaunchPr,
  propHeight,
  propDisplay,
}) => {
  const nellyAndLeeStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[18.6px] text-left text-4xl-3 text-gray-200 font-proxima-nova ${className}`}
    >
      <img
        className="w-[466.2px] relative rounded-[13.99px] h-[349.7px] overflow-hidden shrink-0 object-cover"
        alt=""
        src={img}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <div className="self-stretch relative" style={nellyAndLeeStyle}>
          {nellyAndLeeWanLikLaunchPr}
        </div>
        <div className="rounded-[115.39px] flex flex-row items-center justify-center text-2xl">
          <b className="relative leading-[37.3px]">Read More</b>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  nellyAndLeeWanLikLaunchPr: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Card;
