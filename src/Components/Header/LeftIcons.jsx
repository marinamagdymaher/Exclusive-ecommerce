import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  faHeart,
  faCartShopping,
  faUser,
  faSignOutAlt,
  faStar,
  faBriefcase,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { handleLogout } from "../../Features/user/Logout";


export default function LeftIcons({ closeMenu }) {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    // event.preventDefault();
    const getToken = localStorage.getItem("token");
    setVisibility(!!getToken);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Link to="/wishlist">
        <FontAwesomeIcon
          onClick={closeMenu}
          icon={faHeart}
          size="lg"
          className="p-2 cursor-pointer hover:text-grey-500"
          // className={wishlist ? "text-red-500" : "text-gray-500"}
        />
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon
          onClick={closeMenu}
          icon={faCartShopping}
          size="lg"
          className="cursor-pointer hover:text-grey-500"
        />
      </Link>
      {visibility && <UserDropdown setVisibility={setVisibility} />}
    </div>
  );
}

function UserDropdown({ setVisibility }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  // const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen); // Toggle the dropdown
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onLogout = () => {
    handleLogout();
    setVisibility(false);
    navigate("/login");
  };

  const list = [
    { title: "Manage My Account", icon: faUser },
    { title: "My Order", icon: faBriefcase },
    { title: "My Cancellations", icon: faCircleXmark },
    { title: "My Reviews", icon: faStar, color: "text-yellow-500 " },
    {
      title: "Logout",
      icon: faSignOutAlt,
      function: onLogout,
    },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Circle Icon */}
      <div
        className="w-8 h-8 mx-2 flex items-center justify-center cursor-pointer rounded-full text-white bg-red-200"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon icon={faUser} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-grey-300 rounded shadow-lg">
          <ul className="py-1 text-sm text-grey-700">
            {list.map((item, i) => (
              <Link key={i} to={item.link}>
                <li
                  className={` px-4 py-2 flex items-center hover:bg-grey-300 cursor-pointer`}
                  onClick={item.function}
                  // value={inputValue}
                  // onChange={(e) => setInputValue(e.target.value)}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mr-2 text-grey-700"
                  />
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
