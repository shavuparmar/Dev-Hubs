// src/Layout/SidebarLayout.jsx
import  { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {FaUser , FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png"

import { MdDeveloperBoard } from "react-icons/md";

import { LuLink } from "react-icons/lu";
import { SiBmcsoftware } from "react-icons/si";


// import "react-pro-sidebar/dist/css/styles.css";

export default function SidebarLayout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsMobileOpen((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-gray-200 w-64 transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <ProSidebar className="h-full bg-gray-200">
          {/* Close Button (mobile only) */}
          <div className="md:hidden flex justify-end p-4">
            <button onClick={toggleSidebar}>
              <FaTimes className="text-2xl text-gray-600 hover:text-black transition-colors" />
            </button>
          </div>

          {/* Logo */}
          {/* <Logo /> */}

          {/* Menu */}
          <Menu iconShape="circle">
            <img src={logo} className="h-14 mt-8 w-50 ml-5 mb-10" alt="" />
            <MenuItem component={ <Link to={""}/> } icon={<MdDeveloperBoard size={24} />}>Dashboard</MenuItem>

            <MenuItem component={<Link to={"/participateentry"} />} icon={<LuLink size={24}/>}> Participate Entries</MenuItem>
            <MenuItem component={<Link to={""}/>} icon={<SiBmcsoftware size={24} />}>software</MenuItem>
            <MenuItem component={<Link to={""}/>} icon={<FaUser />}>Profile</MenuItem>
          </Menu>
        </ProSidebar>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-1">
        {/* Mobile Toggle Button */}
        <div className="md:hidden bg-white p-4 shadow flex items-center justify-between">
          <button onClick={toggleSidebar}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
          <span className="text-lg font-bold">DevHubs</span>
        </div>

        {/* Header */}
    

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
