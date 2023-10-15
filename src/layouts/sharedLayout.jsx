import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #b921ff7e, #fa709976 )",
        minHeight: "100vh",
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
        <Outlet/>
    </Box>
  );
};

export default SharedLayout;
