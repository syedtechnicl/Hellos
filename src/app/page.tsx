"use client";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Button, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AllComp from "./pages/AllComp";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// import "./styles/Newyear.css";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    window.open(
      "https://github.com/aleezasaleem",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: auto;
          scrollbar-width: thin;
          scrollbar-color: red transparent;
        }

        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: red;
          border-radius: 10px;
          transition: background-color 0.25s ease-in-out;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>

      <Container>
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="5px"
          bg="gray.300"
          zIndex={1000}
        >
          <Box
            height="100%"
            bg="red"
            width={`${scrollPercentage}%`}
            transition="width 0.2s ease-in-out"
          />
        </Box>

        {/* Header Buttons */}
        <Box
          pt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Button
            variant="ghost"
            onClick={handleClick}
            style={{ color: "#3b82f6" }}
          >
            <FaGithub />
          </Button>

          <Button
            onClick={toggleColorMode}
            variant="ghost"
            style={{ color: "#3b82f6" }}
          >
            {colorMode === "light" ? (
              <MdOutlineNightlight title="Turn On" />
            ) : (
              <MdOutlineLightMode title="Turn Off" />
            )}
          </Button>
        </Box>

        {/* Other Components */}

        <AllComp />
      </Container>
    </>
  );
};

export default Page;
