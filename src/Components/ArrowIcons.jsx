import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowIcons = () => {
  return (
    <div>
      <span className="bg-secondary p-2 rounded-full mr-2">
        <FontAwesomeIcon icon={faArrowLeft} /> {/* Left Arrow */}
      </span>
      <span className="bg-secondary p-2 rounded-full">
        <FontAwesomeIcon icon={faArrowRight} /> {/* Right Arrow */}
      </span>
    </div>
  );
};

export default ArrowIcons;
