import React, { useState } from "react";
import "../styles/Sidebar.scss";
import { Link, useHistory } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const SidebarData = [
  {
    title: "Accueil",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Régions",
    path: "/home/regions",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
  {
    title: "Départements",
    path: "/home/departements",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
  {
    title: "Communes",
    path: "/home/communes",
    icon: <BsIcons.BsMap />,
    cName: "nav-text",
  },
];

function Sidebar() {
  const history = useHistory();
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="navbar-container">
        <div className="menu-button">
          <Link to="#">
            <FaIcons.FaBars
              className="nav-icons"
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            />
          </Link>
          <Link to="/">
            <img src="/pics/logo.png" alt="logo" />
          </Link>
        </div>
        <form>
          <input
            type="search"
            value={searchTerm}
            placeholder="Je recherche une commune, un département..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && searchTerm) {
                history.push(`/${searchTerm.split(" ").join("-")}`);
              }
            }}
          />
          <button type="submit">
            <Link
              to={searchTerm ? `/${searchTerm.split(" ").join("-")}` : null}
            >
              <BsIcons.BsSearch className="nav-icons" />
            </Link>
          </button>
        </form>
      </div>
      <nav className={isShowSidebar ? "nav-menu active" : "nav-menu"}>
        <ul
          className="nav-menu-items"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        >
          <li className="navbar-toggle">
            <Link to="#" className="menu-button">
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

export default Sidebar;
