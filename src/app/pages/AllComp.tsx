"use client";
import React from "react";
import Name from "./Name";

import Section from "./Section";
import { SocialMedia } from "./Socialmedia";
import Skills from "./Skills";
import { Experience } from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Map from "./Map";
import Newnav from "./NewNav";

const AllComp = () => {
  return (
    <>
      <Name />

      <Newnav />

      <Section />

      <SocialMedia />

      <Skills />

      <Experience />

      <Work />

      <Contact />

      <Map />

      <Footer />
    </>
  );
};

export default AllComp;
