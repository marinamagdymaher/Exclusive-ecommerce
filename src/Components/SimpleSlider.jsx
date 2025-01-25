import Slider from "react-slick";
import { useProducts } from "./Helper/ProductContext";
import Card from "../Features/products/Card";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  let settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { products } = useProducts();
  const filtered = products.filter((prd) => prd.salePercent !== false);

  return (
    <div>
      <Slider {...settings}>
        {filtered.length > 0 ? (
          filtered.map((prd, i) => (
            <div key={i} className="p-4">
              <Card
                prd={prd}
                icon={faHeart}
                secondIcon={faEye}
                salePercent={prd.salePercent}
              />
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-grey-500">
            No products available.
          </p>
        )}
      </Slider>
    </div>
  );
}
