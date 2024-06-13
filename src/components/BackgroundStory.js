import PropTypes from "prop-types";

const BackgroundStory = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[662px] bg-blue overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[174.5px] px-0 pb-[319.5px] box-border max-w-full text-center text-111xl text-basic-white font-cormorant-garamond lg:pt-[113px] lg:pb-52 lg:box-border mq750:pt-[73px] mq750:pb-[135px] mq750:box-border mq1050:h-auto ${className}`}
    >
      <div className="mt-[-233px] self-stretch flex flex-row items-start justify-start pt-[59px] pb-[135px] pr-[261px] pl-[262px] box-border relative shrink-0 [debug_commit:69da668] max-w-full lg:pl-[131px] lg:pr-[130px] lg:box-border mq450:pt-[38px] mq450:px-5 mq450:pb-[88px] mq450:box-border mq750:pl-[65px] mq750:pr-[65px] mq750:box-border">
        <div className="h-full w-[1915px] absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_957.5px)] rounded-[50%] bg-blue z-[1]" />
        <h1 className="m-0 w-[1156.2px] relative text-inherit tracking-[-0.04em] leading-[93.24px] inline-block italic font-semibold font-inherit shrink-0 max-w-full z-[2] mq450:text-13xl mq450:leading-[37px] mq1050:text-33xl mq1050:leading-[56px]">
          Nelly
        </h1>
        <div className="flex flex-col items-start justify-start pt-[132px] px-0 pb-0 box-border max-w-full ml-[-932.8px] text-31xl">
          <h1 className="m-0 h-[75px] relative text-inherit leading-[37.3px] inline-block italic font-bold font-inherit z-[2] mq450:text-11xl mq450:leading-[22px] mq1050:text-21xl mq1050:leading-[30px]">
            <p className="m-0">Gone to become an angel,</p>
            <p className="m-0">always in our hearts Ms. Lam Pui Wan</p>
          </h1>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:69da668] mt-[-168px]"
        loading="lazy"
        alt=""
        src="/img@2x.png"
      />
      <div className="w-[1156.2px] hidden flex-row flex-wrap items-start justify-start gap-[37.3px] max-w-full z-[3] text-left text-4xl-3 font-proxima-nova">
        <div className="h-[187px] flex-1 relative leading-[37.3px] inline-block min-w-[363px] max-w-full shrink-0 mq450:text-lgi mq450:leading-[30px] mq450:min-w-full">
          Do everything wholeheartedly, that's Ms. Nelly's principle. We going
          to be the happiest people we have been when we know the work we’ve
          done is impacting someone positively. That’s what allows you to be the
          best version of yourself.
        </div>
        <div className="h-56 flex-1 relative leading-[37.3px] inline-block min-w-[363px] max-w-full shrink-0 mq450:text-lgi mq450:leading-[30px] mq450:min-w-full">
          Together with her husband Mr Lee Wan Lik Executive Chairman for Azeus
          Systems Holdings Ltd, they planned to always continue doing kindness
          by being dedicated to assisting communities and organizations in need.
          Project Nelly aspires to make a significant impact on the
          surroundings.
        </div>
      </div>
    </section>
  );
};

BackgroundStory.propTypes = {
  className: PropTypes.string,
};

export default BackgroundStory;
