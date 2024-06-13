import Card from "./Card";
import PropTypes from "prop-types";

const ListOfProject = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-basic-white overflow-hidden flex flex-col items-center justify-start pt-[62.9px] px-5 pb-[108.8px] box-border gap-[73.9px] max-w-full shrink-0 text-left text-64xl-9 text-gray-200 font-cormorant-garamond mq450:gap-[18px] mq750:gap-[37px] mq750:pt-[27px] mq750:pb-[46px] mq750:box-border mq1050:pt-[41px] mq1050:pb-[71px] mq1050:box-border ${className}`}
    >
      <div className="w-[1456.4px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="relative tracking-[-0.04em] leading-[93.24px] font-semibold mq450:text-6xl mq450:leading-[37px] mq1050:text-23xl mq1050:leading-[56px]">
          Articles
        </div>
      </div>
      <div className="w-[1454.6px] flex flex-col items-end justify-start gap-[92.5px] max-w-full shrink-0 text-4xl-3 font-proxima-nova mq450:gap-[23px] mq750:gap-[46px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq450:gap-[16px] mq750:gap-[33px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-[28px] max-w-full grid-cols-[repeat(3,_minmax(350px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(350px,_606px))] mq750:grid-cols-[minmax(350px,_1fr)]">
            <Card
              img="/img-1@2x.png"
              nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik Launch Project Nelly for Community Impact"
            />
            <Card
              img="/img-2@2x.png"
              nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik's Project Nelly: Spreading Kindness Worldwide"
              propHeight="unset"
              propDisplay="unset"
            />
            <Card
              img="/img-3@2x.png"
              nellyAndLeeWanLikLaunchPr="Nelly and Lee Wan Lik Launch Project Nelly: A Heartfelt Mission for a Better World"
              propHeight="56px"
              propDisplay="inline-block"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] text-2xl text-orangered-100">
          <div className="rounded-[115.39px] flex flex-row items-start justify-start">
            <b className="relative leading-[37.3px] mq450:text-mid mq450:leading-[30px]">
              See All Articles
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

ListOfProject.propTypes = {
  className: PropTypes.string,
};

export default ListOfProject;
