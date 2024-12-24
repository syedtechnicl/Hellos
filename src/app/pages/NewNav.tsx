import React, { useState, useEffect } from "react";
import { useColorMode } from "@/components/ui/color-mode";
import "../styles/Newnav.css";

const Newnav = () => {
  const { colorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Define small screen breakpoint
    };

    // Set initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "SKILLS", link: "#skills" },
    { text: "CONTACT", link: "#Contact" },
    { text: "EXPERIENCE", link: "#exp" },
    { text: "PROJECTS", link: "#project" },
    { text: "EDUCATION", link: "#edugation" },
  ];

  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };

  return (
    <nav
      className="navbar"
      style={{
        background: colorMode === "light" ? "#fff" : "#000000",
      }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          style={{
            color: colorMode === "light" ? "#0984e3" : "#fff",
          }}
        ></div>

        {isSmallScreen ? (
          // Show toggle button for small screens
          <>
            <button
              className="navbar-toggle"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              style={{
                color: colorMode === "light" ? "#0984e3" : "#fff",
                fontSize: "2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              ☰
            </button>

            {isDrawerOpen && (
              <div
                className="navbar-drawer"
                style={{
                  background: colorMode === "light" ? "#f5f5f5" : "#333",
                  position: "fixed",
                  top: 0,
                  right: 0,
                  height: "100%",
                  width: "250px",
                  boxShadow: "-2px 0 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  paddingTop: "50px", // Add some space from the top for the close button
                  overflowY: "auto",
                  transition: "transform 0.3s ease",
                  transform: isDrawerOpen
                    ? "translateX(0)"
                    : "translateX(100%)",
                }}
              >
                <button
                  className="drawer-close"
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: colorMode === "light" ? "#0984e3" : "#fff",
                    fontSize: "1.8rem",
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    cursor: "pointer",
                    padding: "8px",
                    transition: "color 0.3s ease",
                  }}
                >
                  ✖
                </button>

                <div style={{ padding: "10px 20px" }}>
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="navbar-item"
                      style={{
                        marginBottom: "20px",
                        transition: "transform 0.3s ease",
                        padding: "10px 0",
                        textAlign: "center",
                        borderBottom:
                          colorMode === "light"
                            ? "1px solid #ddd"
                            : "1px solid #444",
                      }}
                    >
                      <a
                        href={item.link}
                        className="navbar-link"
                        onClick={handleLinkClick}
                        style={{
                          color: colorMode === "light" ? "#0984e3" : "#fff",
                          fontSize: "1.2rem",
                          fontWeight: "500",
                          textDecoration: "none",
                          display: "block",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // Show all menu items side by side for large screens
          <ul
            className="navbar-links"
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "1rem",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <a
                  href={item.link}
                  className="navbar-link"
                  style={{
                    color: colorMode === "light" ? "#0984e3" : "#fff",
                    fontSize: "1rem",
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Newnav;
