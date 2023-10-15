import { LinearProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box>
      <LinearProgress sx={{ backgroundColor: "#b1e4cc !important", zIndex: "999999" }} />
    </Box>
  );
};

export default Loader;
