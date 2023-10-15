import { useEffect, useState } from "react";
import NET from "vanta/src/vanta.net";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#maze-effect",
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
      }}
      id="maze-effect"
    >
      <Typography
        sx={{
          fontFamily: `"ReFormationSansRegular"!important`,
          zIndex: "10",
          fontSize: "8em",
          fontWeight: "500",
        }}
      >
        ASTRO MAZE
      </Typography>
      <Typography
        sx={{
          fontFamily: `"ReFormationSansRegular"!important`,
          zIndex: "10",
          fontSize: "3em",
        }}
      >
        Escap the room
      </Typography>
      <Button variant="contained" sx={{ mt: 5 }} component={Link} to="login">
        Start
      </Button>
    </Box>
  );
};

export default Home;
