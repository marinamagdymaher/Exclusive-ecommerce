import { NavLink } from "react-router-dom";

export default function NavHeader({ closeMenu }) {
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