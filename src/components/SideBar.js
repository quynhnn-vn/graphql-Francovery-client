import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import logo from "../data/logo.png";
import logoMini from "../data/logo-mini.png";

export default function SideBar() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div className="header">
      <ProSidebar collapsed={isCollapse} >
        <SidebarHeader className="header-title">
          <Link to="/home">
            {isCollapse ? <img src={logoMini} alt="" /> : <img src={logo} alt="" />}
          </Link>
          <div className="closemenu" onClick={toggleCollapse}>
              {isCollapse ? <IoIosArrowDropright /> : <IoIosArrowDropleft />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={isCollapse ? <BsSearch /> : null} onClick={() => setIsCollapse(false)}>
              {isCollapse ? <h4>Search</h4> : (
                <form>
                  <input type="search" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} autoFocus required/>
                  <button type="submit"><Link to={`/map/${searchTerm.split(" ").join("-")}`}><BsSearch /></Link></button>
                </form>
              )}
            </MenuItem>
            <Link to={`/gallery`}>
              <MenuItem icon={<HiOutlinePhotograph />}>
                {isCollapse ? null : <h4>Gallery</h4>}
              </MenuItem>
            </Link>
            <MenuItem icon={<FaRegHeart />}>
              {isCollapse ? null : <h4>Photo</h4>}
            </MenuItem>
            <MenuItem icon={<RiPencilLine />}>
              {isCollapse ? null : <h4>Photo</h4>}
            </MenuItem>
            <MenuItem icon={<BiCog />}>
              {isCollapse ? null : <h4>Photo</h4>}
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>
              {isCollapse ? null : <h4>Photo</h4>}
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
