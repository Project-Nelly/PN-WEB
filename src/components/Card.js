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
      className={`flex flex-col items-start justify-start gap-[18.6px] max-w-full text-left text-4xl-3 text-gray-200 font-proxima-nova ${className}`}
    >
      <img
        className="self-stretch h-[349.7px] relative rounded-[13.99px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={img}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] shrink-0">
        <div
          className="self-stretch relative mq450:text-lgi"
          style={nellyAndLeeStyle}
        >
          {nellyAndLeeWanLikLaunchPr}
        </div>
        <div className="rounded-[115.39px] flex flex-row items-center justify-center text-2xl">
          <b className="relative leading-[37.3px] font-bold mq450:text-mid mq450:leading-[30px]">
            Read More
          </b>
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
