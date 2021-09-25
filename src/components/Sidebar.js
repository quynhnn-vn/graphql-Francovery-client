import React, { useState } from "react";
import "../styles/Sidebar.scss";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from "../data/annotations";

/*
  Sidebar component renders a top and a side navigation.
  The top navigation includes a search form and a button to trigger the side navigation.
  The side navigation includes a list of options to back to homepage or change the map in homepage
*/
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
            placeholder="Je recherche ..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && searchTerm) {
                e.preventDefault();
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
