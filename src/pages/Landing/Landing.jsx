import React from 'react';
import { heroImg } from '../../assests';
import './Landing.css';
export const Landing = () => {
  return (
    <main class="center">
      <section class="wrapper-center">
        <arcticle class="hero-wrapper">
          <h1 class="hero-heading">liveNote</h1>
          <div>
            <h3>Meet your modern</h3>
            <h3 class="text-muted">Note Taking App</h3>
            <p class="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus totam est laudantium voluptatum voluptatem asperiores
              veritatis quidem inventore voluptate aliquid.
            </p>
          </div>
          <button class="btn primary-btn">
            <a href="/home.html">Join Now</a>
          </button>
          <button class="btn">Already Have an account</button>
        </arcticle>
        <article class="hero-img">
          <img src={heroImg} />
        </article>
      </section>
    </main>
  );
};
