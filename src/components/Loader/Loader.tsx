import { ReactComponent as LoaderIcon } from "../../svgs/loader.svg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <LoaderIcon />
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
