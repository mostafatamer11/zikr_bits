import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo.png";

// React Icons
import {
  FaBell,
  FaNewspaper,
  FaSearch,
  FaSignInAlt,
  FaUsers,
} from "react-icons/fa";

const routes = [
  {
    path: "/notifications",
    element: <FaBell size={"24"} />,
    active: true,
  },
  {
    path: "/user/123",
    element: <FaUsers size={"24"} />,
  },
  {
    path: "/feed",
    element: <FaNewspaper size={"24"} />,
  },
  {
    path: "/sign/in",
    element: <FaSignInAlt size={"24"} />,
  },
  {
    path: "/search",
    element: <FaSearch size={"24"} />,
  },
];

const Navbar = () => {
  let logoSize = 48;

  return (
    <motion.header
      animate={{
        y: [-180, 0, 0],
      }}
      transition={{ duration: 1, delay: 1 }}
      className="py-6 fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      }}
    >
      <nav className="flex mx-5 p-5 px-[30px] rounded-[54px] gap-2 bg-white flex-row items-center justify-between ">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              style={{ width: logoSize, height: logoSize }}
              className="rounded-[50%] bg-white border"
              alt="logo"
            />
          </Link>
        </div>
        <ul role="list" className="flex flex-wrap gap-8">
          {routes.map((route) => (
            <li
              key={route.path}
              className="border-[#000] rounded-[50%] text-white"
            >
              <Link
                to={route.path}
                className={`${
                  route.active ? "text-yellow-100 active" : ""
                } hover:text-yellow-100 text-green-200 transition nav-link`}
              >
                {route.element}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
