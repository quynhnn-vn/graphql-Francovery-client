import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewSidebar.scss";
import logo from "../data/logo.png";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Régions",
    path: "/home/regions",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Départements",
    path: "/home/departements",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Communes",
    path: "/home/communes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];

function NewSidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <Link to="#">
            <FaIcons.FaBars onClick={showSidebar} className="nav-icons" />
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <form>
          <input
            type="search"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <Link to={`/${searchTerm.split(" ").join("-")}`}>
              <BsIcons.BsSearch className="nav-icons" />
            </Link>
          </button>
        </form>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose className="nav-icons" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NewSidebar;
