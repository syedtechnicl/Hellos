"use client";
import React, { useEffect } from "react";
import "../styles/Happy2025.css"; // Import the CSS for animation

const Fireworks = () => {
  useEffect(() => {
    // Function to create firework elements with random position and color
    const createFirework = () => {
      const firework = document.createElement("div");
      firework.classList.add("firework");

      // Randomize firework positions
      const xPos = Math.random() * window.innerWidth;
      const yPos = Math.random() * window.innerHeight;
      firework.style.left = `${xPos}px`;
      firework.style.top = `${yPos}px`;

      // Append firework to the body
      document.body.appendChild(firework);

      // Remove firework after animation ends (1s)
      setTimeout(() => {
        document.body.removeChild(firework);
      }, 1000); // Match the duration of the animation
    };

    // Trigger fireworks continuously
    const timer = setInterval(createFirework, 300); // New firework every 300ms (more frequent)

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return <div className="fireworks-container" />;
};

export default Fireworks;
