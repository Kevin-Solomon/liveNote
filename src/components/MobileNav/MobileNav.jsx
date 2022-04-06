import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { MdLabelOutline, MdArchive } from 'react-icons/md';
import { IoTrashBinOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { AiFillFileAdd } from 'react-icons/ai';
import './MobileNav.css';
function MobileNav() {
  const navigate = useNavigate();
  return (
    <div className="mobile-nav">
      <NavLink
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 800 : '',
          };
        }}
        to="/home"
      >
        <div className="sidebar-drawers">
          <span className="sidebar-icon">
            <AiFillHome />
          </span>
        </div>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 800 : '',
          };
        }}
        to="/label"
      >
        <div className="sidebar-drawers">
          <span className="sidebar-icon">
            <MdLabelOutline />
          </span>
        </div>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 800 : '',
          };
        }}
        to="/archive"
      >
        <div className="sidebar-drawers">
          <span className="sidebar-icon">
            <MdArchive />
          </span>
        </div>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 800 : '',
          };
        }}
        to="/trash"
      >
        <div className="sidebar-drawers">
          <span className="sidebar-icon">
            <IoTrashBinOutline />
          </span>
        </div>
      </NavLink>
      <div className="sidebar-drawers">
        <span className="sidebar-icon">
          <CgProfile />
        </span>
      </div>
      <button
        onClick={() => {
          navigate('/singlenote');
        }}
        className="btn floating-btn"
      >
        <AiFillFileAdd />
      </button>
    </div>
  );
}

export default MobileNav;
