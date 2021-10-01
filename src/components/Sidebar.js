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
          <Link to="#" id="show-nav-btn">
            <FaIcons.FaBars
              className="nav-icons"
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            />
          </Link>
          <Link to="/" id="home-btn">
            <img src="/pics/logo.png" alt="logo" />
          </Link>
        </div>
        <form id="search-form">
          <input
            type="search"
            id="search-input"
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
          <button type="submit" id="search-btn">
            <Link
              to={searchTerm ? `/${searchTerm.split(" ").join("-")}` : null}
            >
              <BsIcons.BsSearch className="nav-icons" />
            </Link>
          </button>
        </form>
      </div>
      <nav
        id="nav-menu"
        className={isShowSidebar ? "nav-menu active" : "nav-menu"}
      >
        <Link
          to="#"
          id="hide-nav-btn"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        >
          <AiIcons.AiOutlineClose className="nav-icons"/>
        </Link>
        <ul
          className="nav-menu-items"
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        >
          {SidebarData.map((item, index) => {
            return (
              <li key={index} id={item.id} className={item.cName}>
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
