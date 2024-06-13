import PropTypes from "prop-types";

const Quotes = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-seashell h-[1033.8px] overflow-hidden shrink-0 text-left text-279xl-4 text-orangered-200 font-cormorant-garamond ${className}`}
    >
      <img
        className="absolute h-[106.43%] w-[50.7%] top-[-2.71%] right-[49.3%] bottom-[-3.72%] left-[0%] rounded-tl-none rounded-tr-[13.99px] rounded-br-[13.99px] rounded-bl-none max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/img@2x.png"
      />
      <div className="absolute h-[70.74%] w-[33.61%] top-[18.26%] right-[8.33%] bottom-[11%] left-[58.05%] flex flex-col items-start justify-start gap-[65.3px]">
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.04em] leading-[102.57px]">
            “
          </div>
          <div className="w-[564.1px] relative text-74xl-2 leading-[101.4px] inline-block">
            <span className="font-medium">{`Life may be `}</span>
            <i className="font-medium">difficult</i>
            <span className="font-medium">{`, but never too difficult for acts of `}</span>
            <i className="font-medium">kindness</i>
          </div>
        </div>
        <div className="relative text-27xl-6">
          <span className="font-semibold">{`- Ms. `}</span>
          <i className="font-semibold">Nelly’s</i>
        </div>
      </div>
      <img
        className="relative w-[142.2px] h-[142.2px]"
        alt=""
        src="/subtract.svg"
      />
      <img
        className="relative w-[142.2px] h-[142.2px] object-contain"
        alt=""
        src="/subtract1@2x.png"
      />
    </div>
  );
};

Quotes.propTypes = {
  className: PropTypes.string,
};

export default Quotes;
