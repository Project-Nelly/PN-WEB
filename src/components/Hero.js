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
    <section
      className={`self-stretch overflow-hidden flex flex-col items-end justify-start pt-[43px] px-16 pb-[597.2px] box-border relative gap-[91.2px] max-w-full shrink-0 text-left text-147xl-7 text-basic-white font-cormorant-garamond lg:gap-[46px] lg:pt-7 lg:px-8 lg:pb-[388px] lg:box-border mq750:gap-[23px] mq750:pt-5 mq750:pb-[252px] mq750:box-border ${className}`}
    >
      <img
        className="w-[1296.2px] h-[781.2px] relative object-contain hidden max-w-full z-[0]"
        alt=""
        src="/image-4@2x.png"
      />
      <div className="w-[956.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq450:w-[420.6px]">
        <nav className="m-0 flex flex-row items-start justify-start gap-[26px] max-w-full text-left text-5xl text-basic-white font-fontspring-demo---proxima-nova-semibold mq450:hidden">
          <a className="[text-decoration:none] h-[29px] relative text-[inherit] inline-block z-[2]">
            Home
          </a>
          <a
            className="[text-decoration:none] h-[29px] relative text-[inherit] inline-block cursor-pointer z-[2]"
            onClick={onAboutTextClick}
          >
            About
          </a>
          <a className="[text-decoration:none] relative text-[inherit] z-[2]">
            Projects
          </a>
          <a className="[text-decoration:none] h-[29px] relative text-[inherit] inline-block z-[2]">
            Article
          </a>
          <a className="[text-decoration:none] h-[29px] relative text-[inherit] inline-block z-[2]">
            Collaboration
          </a>
        </nav>
      </div>
      <div className="w-[1032.7px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch relative leading-[149.19px] shrink-0 z-[2] mq450:text-23xl mq450:leading-[60px] mq1050:text-48xl mq1050:leading-[90px]">
          <i className="font-semibold">Happiness</i>
          <span className="font-semibold"> is</span>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16.3px] shrink-0">
          <div className="self-stretch h-[202px] relative font-semibold inline-block z-[2] mq450:text-23xl mq1050:text-48xl">
            for everyone
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[380px] mq450:pl-5 mq450:box-border mq750:pl-[190px] mq750:box-border">
            <Button mdiarrowRight="/mdiarrowright.svg" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1549px] absolute !m-[0] right-[0px] bottom-[-355px] left-[0px]">
        <img
          className="absolute top-[-57px] left-[-582.5px] w-[2262px] h-[1447px] object-cover"
          alt=""
          src="/image-21@2x.png"
        />
        <img
          className="absolute top-[-824.5px] left-[331.3px] w-[2390.4px] h-[1724.8px] object-contain z-[1]"
          alt=""
          src="/ellipse-12.svg"
        />
        <div className="absolute top-[1070px] left-[-117.9px] rounded-[50%] bg-blue w-[1915px] h-[479px] z-[1]" />
        <img
          className="absolute top-[31px] left-[99.7px] w-[230.1px] h-[62px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-54.svg"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
