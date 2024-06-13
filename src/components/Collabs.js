import Button from "./Button";
import PropTypes from "prop-types";

const Collabs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-red h-[1088.6px] overflow-hidden shrink-0 text-left text-120xl-9 text-basic-white font-proxima-nova ${className}`}
    >
      <div className="absolute top-[169px] left-[111.9px] leading-[146.86px] inline-block w-[869.5px] h-[257.6px] font-cormorant-garamond">
        <span className="font-medium">{`Let’s Spread a `}</span>
        <i className="font-medium">Happiness</i>
      </div>
      <img
        className="absolute top-[-144.5px] left-[877.5px] w-[1146.9px] h-[1060.6px] object-cover hidden"
        alt=""
        src="/vector-3@2x.png"
      />
      <div className="absolute top-[calc(50%_-_30.3px)] left-[111.9px] text-12xl-5 leading-[48.95px] text-antiquewhite inline-block w-[755.3px] h-[132.9px]">
        Continuously spreading goodness, love, and happiness through innovation.
      </div>
      <Button
        mdiarrowRight="/mdiarrowright1.svg"
        propBackgroundColor="#fff"
        propDebugCommit="unset"
        propColor="#ff1900"
      />
      <div className="absolute bottom-[163.9px] left-[108.2px] text-4xl-3 leading-[37.3px] inline-block w-[822.9px]">
        Together, let us create a beautiful and compassionate world through our
        collaborative efforts.
      </div>
    </div>
  );
};

Collabs.propTypes = {
  className: PropTypes.string,
};

export default Collabs;
