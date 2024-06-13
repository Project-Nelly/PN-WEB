import PropTypes from "prop-types";

const BackgroundStory = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-blue h-[662px] overflow-hidden shrink-0 text-center text-31xl text-basic-white font-cormorant-garamond ${className}`}
    >
      <img
        className="absolute top-[calc(50%_-_156.5px)] left-[calc(50%_-_840px)] w-[1678.4px] h-[660.9px] overflow-hidden object-cover"
        alt=""
        src="/img@2x.png"
      />
      <div className="absolute top-[-58.5px] left-[calc(50%_-_958px)] rounded-[50%] bg-blue w-[1915px] h-[401px]" />
      <i className="absolute w-[42.29%] top-[20.02%] left-[28.92%] leading-[37.3px] inline-block font-bold">
        <p className="m-0">Gone to become an angel,</p>
        <p className="m-0">always in our hearts Ms. Lam Pui Wan</p>
      </i>
      <div className="absolute top-[0.5px] left-[calc(50%_-_577.9px)] w-[1156.2px] flex flex-col items-center justify-center text-111xl">
        <i className="self-stretch relative tracking-[-0.04em] leading-[93.24px] font-semibold">
          Nelly
        </i>
      </div>
      <div className="absolute top-[194.6px] left-[261.1px] w-[1156.2px] hidden flex-row items-start justify-start gap-[37.3px] text-left text-4xl-3 font-proxima-nova">
        <div className="flex-1 relative leading-[37.3px]">
          Do everything wholeheartedly, that's Ms. Nelly's principle. We going
          to be the happiest people we have been when we know the work we’ve
          done is impacting someone positively. That’s what allows you to be the
          best version of yourself.
        </div>
        <div className="flex-1 relative leading-[37.3px]">
          Together with her husband Mr Lee Wan Lik Executive Chairman for Azeus
          Systems Holdings Ltd, they planned to always continue doing kindness
          by being dedicated to assisting communities and organizations in need.
          Project Nelly aspires to make a significant impact on the
          surroundings.
        </div>
      </div>
    </div>
  );
};

BackgroundStory.propTypes = {
  className: PropTypes.string,
};

export default BackgroundStory;
