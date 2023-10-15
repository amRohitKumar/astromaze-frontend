import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/axios";
import toast from "react-hot-toast";

import {
  Button,
  CssBaseline,
  TextField,
  Container,
  Typography,
  Box,
  InputAdornment,
  Avatar,
} from "@mui/material";
import { EmailIcon, LockOutlinedIcon, NoEncryptionIcon } from "../../icons";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const response = {
        teamId: data.get("teamId"),
        password: data.get("password"),
      };
      // console.log(response);
      const resp = await customFetch.post("/login", response);
      const { msg, startQuestion, teamId } = resp.data;
      // console.log(resp);
      toast.success(msg);
      localStorage.setItem("teamId", teamId);
      navigate("/dashboard", { state: { startQuestion: startQuestion } });
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.msg);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ textTransform: "uppercase" }}
          >
            Sign in to Astro Maze
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              type="text"
              label="Team Id"
              name="teamId"
              color="secondary"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              color="secondary"
              id="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NoEncryptionIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
