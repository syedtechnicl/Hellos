declare module "typewriter-effect/dist/core" {
  interface TypewriterOptions {
    strings?: string[];
    autoStart?: boolean;
    loop?: boolean;
    deleteSpeed?: number;
    typingSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    pauseFor?: number;
    cursor?: string;
    cursorSpeed?: number;
    fadeOut?: boolean;
    fadeOutDelay?: number;
  }

  class Typewriter {
    constructor(container: string | HTMLElement, options?: TypewriterOptions);
    typeString(text: string): Typewriter;
    deleteAll(): Typewriter;
    pauseFor(duration: number): Typewriter;
    start(): void;
  }

  export default Typewriter;
}

declare module "responsive-navbar-react" {
  import React from "react";

  interface NavbarProps {
    items: { text: string; link: string }[];
    logo?: string | React.ReactNode;
    background?: string;
    hoverColor?: string;
    fontColor?: string;
    onClick?: (item: { text: string; link: string }) => void;
  }

  export const Navbar: React.FC<NavbarProps>;
}
