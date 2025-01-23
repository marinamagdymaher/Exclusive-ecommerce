import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
import { useUser } from "../Helper/UserContext";
import { getLocalStorage } from "../../Features/user/LocalStorage2";

export default function BottomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detect scroll and update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Adjust the scroll position as needed
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div
      className={`fixed left-0 w-full bg-white z-50 transition-all duration-300 border-b-2 border-grey-200 ${
        scroll ? "top-0 shadow-md" : "top-30"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start p-4 ">
        {/* Logo or Title */}

        <Logo />
        {/* Hamburger Menu for Mobile */}
        <div className="flex flex-col">
          <button
            className="block lg:hidden text-xl"
            onClick={handleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } lg:block lg:opacity-100 lg:max-h-none  mt-3 lg:mt-0`}
          >
            <NavHeader closeMenu={closeMenu} />
            {isMenuOpen && <LeftIcons closeMenu={closeMenu} />}
          </nav>
        </div>

        <Search />
        {/* Desktop Icons */}
        <div className="hidden lg:flex">
          <LeftIcons />
        </div>
      </div>
    </div>
  );
}
function Logo() {
  return <h4 className="text-2xl font-bold px-2">Exclusive</h4>;
}

function NavHeader({ closeMenu }) {
  const links = [
    { to: "/", title: "Home" },
    { to: "/contacts", title: "Contact" },
    { to: "/about", title: "About" },
    { to: "/register", title: "Sign up" },
  ];

  return (
    <ul className="flex flex-col items-center lg:flex-row gap-3 ">
      {links.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `font-bold px-3 hover:text-grey-500 hover:underline ${
                isActive ? "text-grey-500 underline" : "text-black"
              }`
            }
            onClick={closeMenu}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function Search() {
  return (
    <div className="relative flex items-center">
      <input
        className="w-64 bg-secondary rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="What are you looking for?"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function LeftIcons({ closeMenu }) {
  const [visibility, setVisibility] = useState(false);
  
  // const { visibility,setVisibility } = useUser();
  // const token = localStorage.getItem("token");
  // console.log(token);
  // useEffect(() => {
  //   if (token) {
  //     setVisibility(true);
  //   }
  // }, [token, visibility]);
  
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

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen); // Toggle the dropdown
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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

  const onLogout = (e) => {
    e.preventDefault();
    console.log("object");
    handleLogout();
    setVisibility(false);
    navigate("/login");
    toggleDropdown();
  };

  const goToProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
    toggleDropdown();
  };

  const list = [
    { title: "Manage My Account", icon: faUser, function: goToProfile },
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
                  onClick={(e) => item.function?.(e)}
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
