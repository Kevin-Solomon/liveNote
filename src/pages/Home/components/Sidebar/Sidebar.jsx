import React from 'react';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { MdLabelOutline, MdArchive } from 'react-icons/md';
import { IoTrashBinOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/auth/authContext';
const Sidebar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
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
            <p className="sidebar-name">Home</p>
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
            <p className="sidebar-name">Label</p>
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
            <p className="sidebar-name">Archive</p>
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
            <p className="sidebar-name">Trash</p>
          </div>
        </NavLink>
        <div className="sidebar-drawers">
          <span className="sidebar-icon">
            <CgProfile />
          </span>
          <p className="sidebar-name">Profile</p>
        </div>
        <button
          onClick={() => {
            navigate('/singlenote');
          }}
          className="btn primary-btn"
        >
          Create New Note
        </button>
      </div>

      <div className="sidebar-profile">
        <img
          className="avatar"
          src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
          alt="avatar1"
        />
        <span>{user.userDetails.firstName}</span>
        <span
          className="sidebar-icon"
          onClick={() => {
            setUser({ userDetails: null, token: null });
            navigate('/');
          }}
        >
          <AiOutlineLogout />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
