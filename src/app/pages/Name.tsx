import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
// import { FcProcess } from "react-icons/fc";
import { GiSonicBoom } from "react-icons/gi";

const Name = () => {
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
              {/* <small
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  animation: "colorZoom 3s infinite",
                  color: "#ff6a00",
                }}
              >
                <FcProcess /> Happy New Year 2025
              </small> */}

              <small
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  animation: "colorZoom 3s infinite",
                  color: "#ff6a00",
                }}
              >
                <GiSonicBoom /> 🚧 Site Under Construction 🚧
              </small>

              <style>
                {`
          @keyframes colorZoom {
            0%, 100% {
              transform: scale(1);
              color: #ff6a00;
            }
            50% {
              transform: scale(1.1);
              color: #ee0979;
            }
          }
        `}
              </style>
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
