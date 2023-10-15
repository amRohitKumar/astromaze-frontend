import { LinearProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box>
      <LinearProgress sx={{ backgroundColor: "#b1e4cc !important", zIndex: "99" }} />
    </Box>
  );
};

export default Loader;
