import "./NewArrival.css";

const imageList = [
  { src: "/Frame 684.png", alt: "Stylish Jacket", className: "div1" },
  { src: "/Frame 685.png", alt: "Trendy Bag", className: "div2" },
  { src: "/Frame 686.png", alt: "Fashionable Shoes", className: "div3" },
  { src: "/Frame 706.png", alt: "Elegant Watch", className: "div4" },
];

export default function NewArrival() {
  return (
    <>
      <div className="text-red-200 font-semibold flex gap-5 py-5">
        <span className="border-8"></span>
        <h3>Featured</h3>
      </div>
      <h4 className="text-4xl font-bold mb-6">New Arrival</h4>
      <div className="parent">
        {imageList.map((img, index) => (
          <div className={img.className} key={index}>
            <img src={img.src} alt={img.alt} className="new-arrival-img" />
          </div>
        ))}
      </div>
    </>
  );
}
