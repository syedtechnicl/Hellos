"use client";
import React, { useState, useEffect } from "react";
import "../styles/Newyear.css";

const NewYearCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("January 1, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <small className="animated-text animate__animated animate__fadeIn">
        🌙 Wishing You an Advance Happy New Year! 🌟 May this year bring you
        barakah (blessings), joy, success, and endless opportunities,
        Insha'Allah.
      </small>
      <p className="from-name animate__animated animate__fadeInUp">
        — From Aleeza Saleem
      </p>

      <div
        className="countdown-timer animate__animated animate__zoomIn"
        style={{ animationDelay: "1s" }}
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s until 2025!
      </div>
      <h1
        className="year-2025 animate__animated animate__bounceIn"
        style={{ animationDelay: "2s" }}
      >
        🎉 2025 🎉
      </h1>
    </div>
  );
};

export default NewYearCountdown;
