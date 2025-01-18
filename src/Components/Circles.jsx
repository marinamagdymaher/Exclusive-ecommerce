export default function Circles() {
  const circleContent = [
    {
      img: "track.png",
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      img: "music.png",
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      img: "Services.png",
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
    },
  ];

  return (
    <div className="py-8 flex w-full justify-around flex-wrap">
      {circleContent.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-[200px]"
        >
          <div className="rounded-full bg-gray-200 p-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
          </div>
          <h5 className="mt-4 text-lg font-semibold">{item.title}</h5>
          <span className="mt-2 text-sm text-gray-600">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}


