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
    <div
      className={`absolute top-[calc(50%_-_65.5px)] right-[283.1px] rounded-[115.39px] flex flex-row items-center justify-center py-[18.6px] pr-[32.6px] pl-[37.3px] gap-[9.3px] text-left text-2xl text-basic-white font-proxima-nova border-[1.2px] border-solid border-basic-white ${className}`}
      style={buttonStyle}
    >
      <b className="relative leading-[37.3px]" style={collaborationStyle}>
        Collaboration
      </b>
      <img
        className="w-7 relative h-7 overflow-hidden shrink-0"
        alt=""
        src={mdiarrowRight}
      />
    </div>
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
