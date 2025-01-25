import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SimpleSlider from "./SimpleSlider";
import ButtonSlider from "./ButtonSlider";
import CountdownTimer from "./CountDwnTimer";

export default function FlashSale({
  smallTitle,
  mainTitle,
  color = "text-red-200",
}) {
  return (
    <div className="my-8 border-b-2 border-grey-200">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-red-200 font-semibold flex gap-5 py-5">
            <span className="border-8  "></span>
            <h3 className={`${color}`}>{smallTitle}</h3>
          </div>
          <h4 className="text-4xl font-bold mb-6">{mainTitle}</h4>
        </div>
        <CountdownTimer targetDate="2025-01-31T23:59:59" />

        <div>
          <ButtonSlider icon={faArrowLeft} />
          <ButtonSlider icon={faArrowRight} />
        </div>
      </div>
      <SimpleSlider />
    </div>
  );
}
