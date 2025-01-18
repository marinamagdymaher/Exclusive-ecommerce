import Circles from "../Components/Circles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="py-9 px-3">
      {" "}
      <ul className="flex items-center p-10 mt-8">
        <li className="font-bold text-grey-500 "> Home</li>{" "}
        <li className="px-2">/</li>
        <li className="font-bold "> About</li>
      </ul>
      <div className="flex flex-col md:flex-row justify-between gap-8 py-5">
        <RightSide />
        <LeftSide />
      </div>
      <CustomerInteraction />
      <Experts />
      <Circles />
    </div>
  );
}

function RightSide() {
  return (
    <div className="w-full md:w-1/2 flex flex-col p-10 space-y-4">
      <h5 className="text-5xl font-semibold my-6">Our Story</h5>

      <p className="text-grey-700 pb-3 leading-relaxed">
        Launched in 2015, Exclusive is South Asia’s premier online shopping
        marketplace with an active presence in Bangladesh. Supported by a wide
        range of tailored marketing, data, and service solutions, Exclusive has
        10,500 sellers and 300 brands and serves 3 million customers across the
        region.
      </p>
      <p className="text-grey-700 leading-relaxed">
        Exclusive has more than 1 million products to offer, growing at a very
        fast pace. Exclusive offers a diverse assortment in categories ranging
        from consumer goods to lifestyle products.
      </p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="w-full md:w-1/2 hidden md:block pb-8">
      <img
        src="african-females.png"
        alt="Two African Females Shopping"
        className="h-full w-full object-cover shadow-md"
      />
    </div>
  );
}

function Experts() {
  const expertData = [
    { img: "/Frame 874.png", name: "Tom Cruise", job: "Founder & Chairman" },
    { img: "/Frame 875.png", name: "Emma Watson", job: "Managing Director" },
    { img: "/Frame 876.png", name: "Will Smith", job: "Product Designer" },
  ];

  const socialMedia = [
    { link: "https://twitter.com", icon: faTwitter },
    { link: "https://instagram.com", icon: faInstagram },
    { link: "https://linkedin.com", icon: faLinkedin },
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertData.map((item, i) => (
          <div key={i} className="p-5 ">
            <img src={item.img} alt={item.name} className="mx-auto mb-4" />
            <h4 className="text-2xl font-semibold">{item.name}</h4>
            <p className="text-gray-600">{item.job}</p>
            <div className="flex gap-4 mt-4">
              {socialMedia.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={icon.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerInteraction() {
  const customerContent = [
    {
      img: "Sallers.png",
      title: "10.5k ",
      desc: "Sallers active our site ",
    },
    {
      img: "Mopnthly.png",
      title: "33k",
      desc: "Mopnthly Produduct Sale",
      bg: "bg-red-200",
      text: "text-white",
    },
    {
      img: "Customer active.png",
      title: "45.5k",
      desc: "Customer active in our site",
    },
    {
      img: "Anual gross sale.png",
      title: "25k",
      desc: "Anual gross sale in our site",
    },
  ];

  return (
    <div className="py-8 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {customerContent.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} ${item.text} w-64 mx-auto flex flex-col items-center text-center p-6 border border-grey-300 rounded`}
        >
          <div className="rounded-full p-6 mb-4 bg-gray-100">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
          </div>
          <h5 className="text-xl font-semibold text-gray-800">{item.title}</h5>
          <span className="text-sm mt-2 text-gray-600">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
