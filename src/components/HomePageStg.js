import Hero from "./Hero";
import BackgroundStory from "./BackgroundStory";
import ListOfProject1 from "./ListOfProject1";
import ListOfProject from "./ListOfProject";
import Collabs from "./Collabs";
import Quotes from "./Quotes";
import Footer from "./Footer";
import PropTypes from "prop-types";

const HomePageStg = ({ className = "" }) => {
  return (
    <div
      className={`w-[1680px] max-w-full flex flex-col items-center justify-start ${className}`}
    >
      <Hero />
      <BackgroundStory />
      <ListOfProject1 />
      <ListOfProject />
      <Collabs />
      <Quotes />
      <Footer />
    </div>
  );
};

HomePageStg.propTypes = {
  className: PropTypes.string,
};

export default HomePageStg;
