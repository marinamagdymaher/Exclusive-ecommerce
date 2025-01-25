import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonSlider(props) {
  const { icon, onClick } = props;
  return (
    <button onClick={onClick} className="bg-secondary p-2 rounded-full mr-2">
      <FontAwesomeIcon icon={icon} /> {/* Left Arrow */}
    </button>
  );
}

// export function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <button
//       className={` bg-secondary p-2 rounded-full absolute -left-4 top-1/2 transform -translate-y-1/2 z-10`}
//       onClick={onClick}
//     >
//       <FontAwesomeIcon icon={faArrowLeft} />
//     </button>
//   );
// }

// // Custom Next Arrow
// export function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <button
//       className={` bg-secondary p-2 rounded-full absolute -right-4 top-1/2 transform -translate-y-1/2 z-10`}
//       onClick={onClick}
//     >
//       <FontAwesomeIcon icon={faArrowRight} />
//     </button>
//   );
// }
