import PropTypes from "prop-types";

const ListOfProject1 = ({ className = "" }) => {
  return (
    <section
      className={`bg-basic-white overflow-hidden flex flex-col items-start justify-start pt-[61.8px] px-[111px] pb-[61.7px] box-border gap-[55.2px] max-w-full shrink-0 text-left text-64xl-9 text-gray-200 font-cormorant-garamond mq450:gap-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq1050:py-10 mq1050:px-[55px] mq1050:box-border ${className}`}
    >
      <div className="w-[1428.8px] flex flex-row items-start justify-center max-w-full">
        <div className="relative tracking-[-0.04em] leading-[93.24px] mq450:text-6xl mq450:leading-[37px] mq1050:text-23xl mq1050:leading-[56px]">
          <span className="font-semibold">{`Our `}</span>
          <i className="font-semibold">Project</i>
        </div>
      </div>
      <div className="w-[1454.6px] overflow-x-auto flex flex-row items-start justify-start gap-[28px] max-w-full text-18xl-3 text-basic-white font-proxima-nova">
        <div className="w-[466.2px] rounded-[13.99px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[37.3px] pb-[601px] pr-5 pl-[37px] box-border relative gap-[18.2px] min-h-[755px] z-[1] mq750:pt-6 mq750:pb-[391px] mq750:box-border">
          <img
            className="w-[1186.5px] h-[1784.4px] absolute !m-[0] right-[-360.2px] bottom-[-783.1px] object-cover z-[1]"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="w-[466.2px] h-[755.3px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] hidden max-w-full z-[1]" />
          <b className="w-[268.1px] relative leading-[46.62px] inline-block z-[2] mq450:text-3xl mq450:leading-[28px] mq1050:text-11xl mq1050:leading-[37px]">
            Project A
          </b>
          <p className="m-0 w-[394px] relative text-2xl text-gainsboro inline-block max-w-full z-[2] mq450:text-mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="w-[466.2px] rounded-[13.99px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[37.3px] pb-[601px] pr-5 pl-[37px] box-border relative gap-[18.2px] min-h-[755px] mq750:pt-6 mq750:pb-[391px] mq750:box-border">
          <img
            className="w-[1181.9px] h-[966.2px] absolute !m-[0] right-[-357.9px] bottom-[-210.9px] object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] z-[1]" />
          <b className="w-[268.1px] relative leading-[46.62px] inline-block z-[2] mq450:text-3xl mq450:leading-[28px] mq1050:text-11xl mq1050:leading-[37px]">
            Project B
          </b>
          <p className="m-0 w-[394px] relative text-2xl text-gainsboro inline-block max-w-full z-[2] mq450:text-mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="h-[755.3px] w-[466.2px] relative rounded-[13.99px] overflow-hidden shrink-0">
          <img
            className="absolute top-[-37.3px] left-[0px] w-[792.6px] h-[829.9px] object-cover"
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] w-full flex flex-col items-start justify-start pt-[37.3px] pb-[601px] pr-5 pl-[37px] box-border gap-[18.2px] min-h-[755px] max-w-full h-full z-[1]">
            <div className="w-[466.2px] h-[755.3px] relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.66),_rgba(0,_0,_0,_0.48)_31.25%,_rgba(0,_0,_0,_0)_70.31%)] hidden max-w-full" />
            <b className="w-[268.1px] relative leading-[46.62px] inline-block z-[2] mq450:text-3xl mq450:leading-[28px] mq1050:text-11xl mq1050:leading-[37px]">
              Project C
            </b>
            <p className="m-0 w-[394px] relative text-2xl text-gainsboro inline-block max-w-full z-[2] mq450:text-mid">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

ListOfProject1.propTypes = {
  className: PropTypes.string,
};

export default ListOfProject1;
