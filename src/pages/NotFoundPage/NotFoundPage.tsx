import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <FontAwesomeIcon icon={faFaceFrown} />
			<span>404 Not Found</span>
    </div>
  );
};

export default NotFoundPage;
