import React from 'react';
import { Link } from 'react-router-dom';
import { heroImg } from '../../assests';
import './Landing.css';
export const Landing = () => {
  return (
    <main className="center">
      <section className="wrapper-center">
        <article className="hero-wrapper">
          <h1 className="hero-heading">liveNote</h1>
          <div>
            <h3>Meet your modern</h3>
            <h3 className="text-muted">Note Taking App</h3>
            <p className="hero-text">
              Lorem ipsum dolor sit amset consectetur adipisicing elit.
              Voluptatibus totam est laudantium voluptatum voluptatem asperiores
              veritatis quidem inventore voluptate aliquid.
            </p>
          </div>

          <button className="btn primary-btn">
            <Link to="/signup">Join Now</Link>
          </button>
          <Link to="login">Already Have an account</Link>
        </article>
        <article className="hero-img">
          <img src={heroImg} />
        </article>
      </section>
    </main>
  );
};
