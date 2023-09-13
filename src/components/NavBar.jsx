import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { title: "eventos", to:"/" },
  ];

  return (
    <>
      <header className="absolute px-2 py-1 w-full">
        <nav className="flex items-center ">
          <Link to={"/"}>
            <h1 className="font-blackOps text-white text-xl">
              AlaskaMuu
            </h1>
          </Link>

          <button className="text-2xl ml-auto">
          <FontAwesomeIcon icon={faBars} style={{color: "#fafafa",}} />
          </button>

          <div className="text-white ml-auto hidden">
            {nav.map((page) => (
              <Link key={page.title} to={page.to}>
                <ul>
                  <li className="">{page.title}</li>
                </ul>
              </Link>
            ))}
          </div>

        </nav>
      </header>
    </>
  );
};

export default NavBar;
