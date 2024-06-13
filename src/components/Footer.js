import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[117.7px] px-[111px] pb-[117.4px] gap-[252.8px] shrink-0 text-left text-4xl-3 text-basic-white font-proxima-nova mq450:gap-[63px] mq450:pt-[50px] mq450:px-5 mq450:pb-[49px] mq450:box-border mq750:pt-[77px] mq750:pb-[76px] mq750:box-border mq1050:gap-[126px] mq1050:pl-[55px] mq1050:pr-[55px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[673px] mq750:pl-[168px] mq750:box-border mq1050:pl-[336px] mq1050:box-border">
        <div className="w-[306.5px] flex flex-row items-start justify-between gap-[20px]">
          <div className="w-[155px] flex flex-col items-start justify-start gap-[28px]">
            <div className="self-stretch h-7 relative inline-block z-[1] mq450:text-lgi">
              Home
            </div>
            <div className="self-stretch h-7 relative inline-block z-[1] mq450:text-lgi">
              About
            </div>
            <div className="self-stretch relative z-[1] mq450:text-lgi">
              Project
            </div>
            <div className="self-stretch h-7 relative inline-block z-[1] mq450:text-lgi">
              Collaboration
            </div>
            <div className="self-stretch h-7 relative inline-block z-[1] mq450:text-lgi">
              News
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[18.7px]">
              <img
                className="h-[23.3px] w-[23.3px] relative overflow-hidden shrink-0 min-h-[23px] z-[1]"
                loading="lazy"
                alt=""
                src="/remixiconsfilllogosfacebookboxfill.svg"
              />
              <img
                className="h-[23.3px] w-[23.3px] relative overflow-hidden shrink-0 min-h-[23px] z-[1]"
                loading="lazy"
                alt=""
                src="/remixiconslinelogosinstagramline.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[128.2px] flex flex-row items-start justify-start relative text-2xl">
        <div className="h-[662.4px] w-[1567.3px] absolute !m-[0] top-[-518.7px] right-[-1439.1px]">
          <img
            className="absolute top-[0px] left-[88.6px] w-[1678.4px] h-[1218.7px] object-cover"
            alt=""
            src="/image-41@2x.png"
          />
          <img
            className="absolute top-[25.6px] left-[0px] w-[678.3px] h-[480.2px] z-[1]"
            alt=""
            src="/group-51.svg"
          />
        </div>
        <div className="h-[26px] flex-1 relative inline-block shrink-0 mq450:text-mid">
          © 2024
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
