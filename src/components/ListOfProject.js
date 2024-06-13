import Card from "./Card";
import PropTypes from "prop-types";

const ListOfProject = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-basic-white h-[946.4px] overflow-hidden shrink-0 text-left text-64xl-9 text-gray-200 font-proxima-nova ${className}`}
    >
      <div className="absolute w-[14.24%] top-[6.65%] left-[42.92%] tracking-[-0.04em] leading-[93.24px] font-semibold font-cormorant-garamond inline-block">
        Articles
      </div>
      <div className="absolute h-[50.33%] w-[86.67%] top-[24.39%] right-[6.67%] bottom-[25.29%] left-[6.67%] flex flex-col items-start justify-start text-4xl-3">
        <div className="flex flex-row items-start justify-start gap-[28px]">
          <Card
            img="/img@2x.png"
            nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik Launch Project Nelly for Community Impact"
          />
          <Card
            img="/img@2x.png"
            nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik's Project Nelly: Spreading Kindness Worldwide"
            propHeight="unset"
            propDisplay="unset"
          />
          <Card
            img="/img@2x.png"
            nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik Launch Project Nelly: A Heartfelt Mission for a Better World"
            propHeight="unset"
            propDisplay="unset"
          />
        </div>
      </div>
      <div className="absolute h-[4.02%] w-[8.58%] top-[84.49%] right-[45.68%] bottom-[11.5%] left-[45.74%] rounded-[115.39px] flex flex-row items-center justify-center text-2xl text-orangered-100">
        <b className="relative leading-[37.3px]">See All Articles</b>
      </div>
    </div>
  );
};

ListOfProject.propTypes = {
  className: PropTypes.string,
};

export default ListOfProject;
