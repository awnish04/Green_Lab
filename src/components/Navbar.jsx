import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 flex py-6 px-8 justify-between w-full items-center navbar bg-[#245f45] z-50 shadow-2xl">
      <div className="text-xl lg:text-4xl font-bold font-poppins text-white" style={{ textShadow: "0 0 1px #38f59d, 0 0 2px #38f59d, 0 0 10px #38f59d" }}>
  Going Green In ICT
</div>
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}

      <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] ${
              active === nav.title ? "text-green-400" : "text-gray-200"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden p-2 flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="bg-black text-black w-[20px] h-[20px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary absolute top-[75px] right-0 w-full min-h-screen sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col mb-32">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-lg font-normal cursor-pointer ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a className="uppercase" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
