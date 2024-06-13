import PropTypes from "prop-types";

const ListOfProject1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-basic-white h-[1028px] overflow-hidden shrink-0 text-left text-64xl-9 text-gray-200 font-cormorant-garamond ${className}`}
    >
      <div className="absolute w-[19.9%] top-[6.01%] left-[39.3%] tracking-[-0.04em] leading-[93.24px] inline-block">
        <span className="font-semibold">{`Our `}</span>
        <i className="font-semibold">Project</i>
      </div>
      <div className="absolute h-[73.47%] w-[86.67%] top-[20.53%] right-[6.67%] bottom-[6%] left-[6.67%] flex flex-row items-start justify-start gap-[28px] text-18xl-3 text-basic-white font-proxima-nova">
        <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_623.55px)] left-[calc(50%_-_593.55px)] w-[1186.5px] h-[1784.4px] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
          <b className="absolute top-[37.3px] left-[37.3px] leading-[46.62px] inline-block w-[268.1px]">
            Project A
          </b>
          <div className="absolute top-[102.6px] left-[37.3px] text-2xl text-gainsboro inline-block w-[394px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_377.65px)] left-[calc(50%_-_591.15px)] w-[1181.9px] h-[966.2px] object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <b className="absolute top-[37.3px] left-[37.3px] leading-[46.62px] inline-block w-[268.1px]">
            Project B
          </b>
          <div className="absolute top-[102.6px] left-[37.3px] text-2xl text-gainsboro inline-block w-[394px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="self-stretch flex-1 relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_414.95px)] left-[calc(50%_-_233.35px)] w-[792.6px] h-[829.9px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <b className="absolute top-[37.3px] left-[37.3px] leading-[46.62px] inline-block w-[268.1px]">
            Project C
          </b>
          <div className="absolute top-[102.6px] left-[37.3px] text-2xl text-gainsboro inline-block w-[394px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  );
};

ListOfProject1.propTypes = {
  className: PropTypes.string,
};

export default ListOfProject1;
