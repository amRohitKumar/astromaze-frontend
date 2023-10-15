import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
  backgroundImage: "linear-gradient(to bottom, #b921ff7e, #fa709976 )",
  minHeight: "100vh",
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  overflowX: "hidden",
  ".question-paper": {
    display: "flex",
    borderRadius: "10px",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "80vw",
    height: "80vh",
    padding: "1em 2em",
  },
  ".question-container": {
    // border: "1px solid red",
    pointerEvents: "none",
    fontSize: "1.1em",
    textAlign: "justify",
  },
  ".question-img": {
    // border: "1px solid red",
    height: "400px",
    width: "100%",
  },
});

export default Wrapper;
