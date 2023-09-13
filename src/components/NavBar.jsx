import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { title: "Eventos", to:"/" },
    {title:"Tienda" ,to:"/"},
    {title:"Registro" ,to:"/"},
    {title:"Mi perfil" ,to:"/"}
  ];

  return (
    <>
      <header className=" relative max-w-[2020px]">
        <nav className="flex items-center absolute px-2 py-1 lg:p-3 w-full  m-auto ">
          <Link to={"/"}>
            <h1 className="font-blackOps text-white text-2xl md:text-3xl">
              AlaskaMu
            </h1>
          </Link>
          <button className="text-2xl ml-auto md:hidden">
          <FontAwesomeIcon icon={faBars} style={{color: "#fafafa",}} />
          </button>

          <div className="text-white ml-auto hidden md:flex gap-5 lg:gap-16 lg:pr-10">
            {nav.map((page) => (
              <Link key={page.title} to={page.to}>
                <ul className="text-lg">
                  <li className="font-redrose">{page.title}</li>
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
