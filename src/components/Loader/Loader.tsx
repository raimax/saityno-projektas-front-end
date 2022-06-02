import { ReactComponent as LoaderIcon } from "../../svgs/loader.svg";
import "./Loader.scss";

interface LoaderProps {
  text: string;
  isLoading: boolean;
}

const Loader = ({ text, isLoading }: LoaderProps) => {
  if (isLoading) {
    return (
      <div className="loader">
        <div>
          <LoaderIcon />
        </div>
        <span>{text}</span>
      </div>
    );
  }

  return null;
};

export default Loader;

Loader.defaultProps = {
  text: "Loading...",
};
