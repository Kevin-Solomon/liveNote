import React from 'react';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { MdLabelOutline, MdArchive } from 'react-icons/md';
import { IoTrashBinOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import './Home.css';
export const Home = () => {
  return (
    <div className="body-center">
      <nav className="navbar">
        <div className="logo">
          <h2>liveNote📚</h2>
        </div>
        <div className="right-nav">
          <ul>
            <li>Github</li>
            <li>Twitter</li>
          </ul>
        </div>
      </nav>
      <main className="note-container">
        <aside className="sidebar">
          <div className="sidebar-container">
            <div className="sidebar-drawers">
              <span className="sidebar-icon">
                <AiFillHome />
              </span>
              <p className="sidebar-name">Home</p>
            </div>
            <div className="sidebar-drawers">
              <span className="sidebar-icon">
                <MdLabelOutline />
              </span>
              <p className="sidebar-name">Label</p>
            </div>
            <div className="sidebar-drawers">
              <span className="sidebar-icon">
                <MdArchive />
              </span>
              <p className="sidebar-name">Archive</p>
            </div>
            <div className="sidebar-drawers">
              <span className="sidebar-icon">
                <IoTrashBinOutline />
              </span>
              <p className="sidebar-name">Trash</p>
            </div>
            <div className="sidebar-drawers">
              <span className="sidebar-icon">
                <CgProfile />
              </span>
              <p className="sidebar-name">Profile</p>
            </div>
            <button className="btn primary-btn">Create New Note</button>
          </div>

          <div className="sidebar-profile">
            <img
              class="avatar"
              src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
              alt="avatar1"
            />
            <span>Kevin Solomon</span>
            <span className="sidebar-icon">
              <AiOutlineLogout />
            </span>
          </div>
        </aside>
        <section className="note-wrapper">
          <div className="note-card">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              perferendis!
            </p>
          </div>
          <div className="note-card">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              perferendis!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
