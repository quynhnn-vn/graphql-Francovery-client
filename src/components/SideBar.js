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
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

export default function SideBar() {
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div className="header">
      <ProSidebar collapsed={isCollapse} >
        <SidebarHeader className="header-title" onClick={toggleCollapse}>
          {isCollapse ? <h1>Fra</h1> : <h1>Francovery</h1>}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
          <Link to="/home">
              <MenuItem icon={<FaList />}>
                {isCollapse ? null : <h4>Home</h4>}
              </MenuItem>
          </Link>
            <MenuItem icon={<FaList />}>
              {isCollapse ? null : <h4>Photo</h4>}
            </MenuItem>
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
