import PropTypes from "prop-types";

const Quotes = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1033.8px] bg-seashell overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[188.9px] px-0 pb-0 box-border gap-[123.6px] max-w-full text-left text-279xl-4 text-orangered-200 font-cormorant-garamond lg:pl-5 lg:pt-[123px] lg:pr-5 lg:box-border mq450:h-auto mq450:gap-[31px] mq750:pt-20 mq750:box-border mq1050:gap-[62px] ${className}`}
    >
      <div className="mb-[-38.6px] h-[1100.3px] flex-1 flex flex-row items-end justify-start pt-[38px] px-0 pb-[38.5px] box-border relative max-w-[calc(100%_-_828px)] lg:hidden lg:max-w-full">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-tl-none rounded-tr-[13.99px] rounded-br-[13.99px] rounded-bl-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/img-4@2x.png"
        />
        <img
          className="h-[142.2px] w-[142.2px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/subtract.svg"
        />
      </div>
      <div className="w-[704px] flex flex-col items-start justify-start gap-[65.2px] max-w-[calc(100%_-_974px)] shrink-0 lg:hidden lg:max-w-full mq450:gap-[16px] mq750:gap-[33px]">
        <div className="w-[584.1px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
          <div className="w-[91px] relative tracking-[-0.04em] leading-[102.57px] inline-block mq450:text-56xl mq450:leading-[41px] mq1050:text-100xl mq1050:leading-[62px]">
            “
          </div>
          <div className="self-stretch h-[507px] relative text-74xl-2 leading-[101.4px] inline-block mq450:text-9xl mq450:leading-[41px] mq1050:text-28xl mq1050:leading-[61px]">
            <span className="font-medium">{`Life may be `}</span>
            <i className="font-medium">difficult</i>
            <span className="font-medium">{`, but never too difficult for acts of `}</span>
            <i className="font-medium">kindness</i>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-27xl-6 mq450:flex-wrap">
          <div className="relative shrink-0 [debug_commit:69da668] mq450:text-9xl mq1050:text-18xl">
            <span className="font-semibold">{`- Ms. `}</span>
            <i className="font-semibold">Nelly’s</i>
          </div>
          <div className="flex flex-col items-start justify-start pt-[27.6px] px-0 pb-0">
            <img
              className="w-[142.2px] h-[142.2px] relative object-contain shrink-0 [debug_commit:69da668]"
              alt=""
              src="/subtract-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Quotes.propTypes = {
  className: PropTypes.string,
};

export default Quotes;
