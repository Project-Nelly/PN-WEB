import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  mdiarrowRight,
  propBackgroundColor,
  propDebugCommit,
  propColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      debugCommit: propDebugCommit,
    };
  }, [propBackgroundColor, propDebugCommit]);

  const collaborationStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <button
      className={`cursor-pointer py-[17px] pr-[31px] pl-[37px] bg-[transparent] rounded-[115.39px] flex flex-row items-start justify-start gap-[9.3px] z-[2] border-[1.2px] border-solid border-basic-white ${className}`}
      style={buttonStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <b
          className="h-3.5 relative text-2xl leading-[37.3px] font-bold font-proxima-nova text-basic-white text-left inline-block mq450:text-mid mq450:leading-[30px]"
          style={collaborationStyle}
        >
          Collaboration
        </b>
      </div>
      <img
        className="h-7 w-7 relative overflow-hidden shrink-0"
        alt=""
        src={mdiarrowRight}
      />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  mdiarrowRight: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propColor: PropTypes.any,
};

export default Button;
