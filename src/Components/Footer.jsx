import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-white ">
      <TopFooter />
      <hr className="border-grey-600" />
      <BottomFooter />
    </div>
  );
}

function TopFooter() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-5">
      {/* Logo Section */}
      <div className="xs:w-64">
        {/* <Logo /> */}
        <h4 className="text-2xl font-bold">Exclusive</h4>
        <button className=" text-white py-2 rounded">Subscribe</button>
        <p>Get 10% off your first order</p>

        <div className="flex items-center gap-2 mt-4 w-1 xs:w-24">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-2 rounded border border-grey-300 text-sm flex-grow bg-black text-white"
          />
        </div>
      </div>

      {/* Support Section */}
      <ul className="xs:w-48">
        <li className="font-bold py-2">Support</li>
        <li className="py-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
        <li className="py-2">exclusive@gmail.com</li>
        <li className="py-2">+88015-88888-9999</li>
      </ul>

      {/* Account Section */}
      <ul>
        <li className="font-bold py-2">Account</li>
        <li className="py-2">
          <Link to="/profile">My Account</Link>
        </li>
        <li className="py-2">
          <Link to="/register">Login / Register</Link>
        </li>
        <li className="py-2">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="py-2">
          <Link to="/wishlist"> Wishlist</Link>
        </li>
        <li className="py-2">
          <Link to="/products"></Link>
          Shop
        </li>
      </ul>

      {/* Quick Links Section */}
      <ul>
        <li className="font-bold py-2">Quick Links</li>
        <li className="py-2">Privacy Policy</li>
        <li className="py-2">Terms of Use</li>
        <li className="py-2">FAQ</li>
        <li className="py-2">
          <Link to="contacts">Contact</Link>
        </li>
      </ul>

      {/* Download App Section */}
      <div className="xs:w-64">
        <h5 className="font-bold py-2">Download App</h5>
        <p className="py-2">Save $3 with App New Users Only</p>
        <div className="mt-4">
          <img
            src="/Frame 719.png"
            alt="App Store"
            className="inline-block mr-2"
          />
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="flex items-center justify-between  xs:w-64 py-5 gap-1 xs:gap-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" transition"
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

function BottomFooter() {
  return (
    <p className="text-center p-3 text-grey-600">
      Copyright Rimel 2022. All right reserved
    </p>
  );
}
