import { useEffect,  useState } from "react";

import NavHeader from "./NavHeader";
import Search from "./Search";
import LeftIcons from "./LeftIcons";


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



