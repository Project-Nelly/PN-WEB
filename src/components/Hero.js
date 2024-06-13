import { useCallback } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  const onAboutTextClick = useCallback(() => {
    window.open(
      "https://www.figma.com/design/2QH7IXnLAsprtbb9gcQ7SZ/Project-Nelly-Web-Development?node-id=359-9832"
    );
  }, []);

  return (
    <div
      className={`self-stretch relative h-[1194px] overflow-hidden shrink-0 text-left text-147xl-7 text-basic-white font-cormorant-garamond ${className}`}
    >
      <img
        className="absolute top-[calc(50%_-_654px)] left-[calc(50%_-_1422.5px)] w-[2262px] h-[1447px] object-cover"
        alt=""
        src="/image-21@2x.png"
      />
      <img
        className="absolute top-[-824.5px] left-[331.3px] w-[2390.4px] h-[1724.8px] object-contain"
        alt=""
        src="/ellipse-12.svg"
      />
      <div className="absolute h-[29.48%] w-[61.47%] top-[13.67%] right-[3.85%] bottom-[56.85%] left-[34.68%] flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[149.19px]">
          <i className="font-semibold">Happiness</i>
          <span className="font-semibold"> is</span>
        </div>
        <div className="self-stretch relative font-semibold">for everyone</div>
      </div>
      <img
        className="absolute h-[65.43%] w-[77.15%] top-[34.57%] right-[-18.27%] bottom-[0%] left-[41.11%] max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/image-4@2x.png"
      />
      <div className="absolute top-[1070px] left-[calc(50%_-_957.9px)] rounded-[50%] bg-blue w-[1915px] h-[479px]" />
      <Button mdiarrowRight="/mdiarrowright.svg" />
      <div className="absolute top-[0px] left-[calc(50%_-_839.3px)] w-[1679px] h-[115px] overflow-hidden text-5xl font-fontspring-demo---proxima-nova-semibold">
        <div className="absolute h-[25.22%] w-[31.92%] top-[37.39%] right-[16.38%] bottom-[37.39%] left-[51.7%] flex flex-row items-center justify-end gap-[26px]">
          <div className="relative">Home</div>
          <div className="relative cursor-pointer" onClick={onAboutTextClick}>
            About
          </div>
          <div className="relative">Projects</div>
          <div className="relative">Article</div>
          <div className="relative">Collaboration</div>
        </div>
        <img
          className="absolute h-[53.91%] w-[13.7%] top-[26.96%] right-[80.4%] bottom-[19.13%] left-[5.9%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-54.svg"
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
