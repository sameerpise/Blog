import React from "react";
import Card from "./Card/Card";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "../Componets/animatedline/animeted.css";
import "./hero.css"
import bgImage from "../assets/images/head.jpg";
export default function Hero() {
  return (
    <ParallaxProvider>
      {/* Hero Section */}
      <Parallax speed={-10} className="hero-section " style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="wrapintro text-center">
          <h1 className="animated-underline">Welcome to Life Unfiltered</h1>
          <h2 className="lead">
            Explore insightful articles, creative stories, and expert opinions
            from various fields. Inspire, learn, and share your thoughts.
          </h2>
          <a href="/create" className="btn btn-primary btn-lg mt-3">
            Start Writing
          </a>
        </div>
      </Parallax>

      {/* Blog Cards Section */}
      <Card />

      {/* Styles */}
      <style>
        
      </style>
    </ParallaxProvider>
  );
}
