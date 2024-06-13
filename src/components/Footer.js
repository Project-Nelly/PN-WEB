import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch relative bg-gray-100 h-[765.8px] overflow-hidden shrink-0 text-left text-4xl-3 text-basic-white font-proxima-nova ${className}`}
    >
      <img
        className="absolute h-[159.14%] w-full top-[13.54%] right-[-11.95%] bottom-[-72.68%] left-[11.95%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute h-[62.71%] w-[40.42%] top-[16.9%] right-[52.92%] bottom-[20.4%] left-[6.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-51.svg"
      />
      <div className="absolute top-[calc(50%_-_279.2px)] left-[calc(50%_+_170.4px)] w-[183px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-center p-3.5">
          <div className="flex-1 relative">Home</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center p-3.5">
          <div className="flex-1 relative">About</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center p-3.5">
          <div className="flex-1 relative">Project</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center p-3.5">
          <div className="flex-1 relative">Collaboration</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center p-3.5">
          <div className="flex-1 relative">News</div>
        </div>
      </div>
      <div className="absolute bottom-[117.4px] left-[111.9px] text-2xl inline-block w-[128.2px]">
        © 2024
      </div>
      <div className="absolute top-[calc(50%_-_272.2px)] left-[calc(50%_+_416.3px)] flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-center p-[9.3px]">
          <img
            className="w-[23.3px] relative h-[23.3px] overflow-hidden shrink-0"
            alt=""
            src="/remixiconsfilllogosfacebookboxfill.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center p-[9.3px]">
          <img
            className="w-[23.3px] relative h-[23.3px] overflow-hidden shrink-0"
            alt=""
            src="/remixiconslinelogosinstagramline.svg"
          />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
