import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { GiSonicBoom } from "react-icons/gi";

const Name = () => {
  const [greeting, setGreeting] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greetingText = "Hello";

    if (currentHour < 12) greetingText = "Good Morning";
    else if (currentHour < 18) greetingText = "Good Afternoon";
    else greetingText = "Good Evening";

    setGreeting(greetingText);
  }, []);

  return (
    <>
      <Box pt={{ base: 5, sm: 10, md: 12 }}>
        <Container>
          <Stack>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <small
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#ff6a00",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  opacity: isHovered ? "0.8" : "1",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <GiSonicBoom /> 🚧 Site Under Construction {greeting} 🚧
              </small>

              <style jsx>{`
                small {
                  position: relative;
                  overflow: hidden;
                }

                small::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    120deg,
                    transparent,
                    rgba(255, 255, 255, 0.3),
                    transparent
                  );
                  animation: ${isHovered ? "shine 1.5s infinite" : "none"};
                }

                @keyframes shine {
                  0% {
                    left: -100%;
                  }
                  100% {
                    left: 100%;
                  }
                }
              `}</style>
            </div>

            <Text
              fontStyle={"italic"}
              fontWeight={"bold"}
              textStyle={{ base: "4xl", sm: "4xl", md: "4xl" }}
              // textAlign={{ base: "center", sm: "left" }}
            >
              &lt;Alee<span className="animate-color">za/&gt;</span>
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Name;
