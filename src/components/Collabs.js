import Button from "./Button";
import PropTypes from "prop-types";

const Collabs = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-red overflow-hidden flex flex-col items-start justify-start pt-[169px] px-[108px] pb-[163.9px] box-border gap-[202.8px] max-w-full shrink-0 text-left text-120xl-9 text-basic-white font-cormorant-garamond lg:gap-[101px] lg:pt-[110px] lg:px-[54px] lg:pb-[107px] lg:box-border mq450:gap-[25px] mq750:gap-[51px] mq750:pt-[71px] mq750:px-[27px] mq750:pb-[70px] mq750:box-border ${className}`}
    >
      <img
        className="w-[1146.9px] h-[1060.6px] relative object-contain hidden max-w-full"
        alt=""
        src="/vector-3@2x.png"
      />
      <div className="w-[876.2px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[87.4px] max-w-full mq450:gap-[22px] mq1050:gap-[44px]">
          <div className="self-stretch h-[294px] relative leading-[146.86px] inline-block shrink-0 mq450:text-16xl mq450:leading-[59px] mq1050:text-37xl mq1050:leading-[88px]">
            <span className="font-medium">{`Let’s Spread a `}</span>
            <i className="font-medium">Happiness</i>
          </div>
          <div className="w-[755.3px] h-[98px] relative text-12xl-5 leading-[48.95px] font-proxima-nova text-antiquewhite inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-6xl mq1050:leading-[39px]">
            Continuously spreading goodness, love, and happiness through
            innovation.
          </div>
        </div>
      </div>
      <div className="w-[1440.4px] flex flex-row items-start justify-between max-w-full gap-[20px] text-4xl-3 font-proxima-nova lg:flex-wrap">
        <p className="m-0 h-[75px] w-[822.9px] relative leading-[37.3px] inline-block shrink-0 [debug_commit:69da668] max-w-full mq450:text-lgi mq450:leading-[30px]">
          Together, let us create a beautiful and compassionate world through
          our collaborative efforts.
        </p>
        <Button
          mdiarrowRight="/mdiarrowright-1.svg"
          propBackgroundColor="#fff"
          propDebugCommit="unset"
          propColor="#ff1900"
        />
      </div>
    </section>
  );
};

Collabs.propTypes = {
  className: PropTypes.string,
};

export default Collabs;
