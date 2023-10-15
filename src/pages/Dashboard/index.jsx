import { useEffect, useState } from "react";
import { Paper, TextField, Typography, Button, Box } from "@mui/material";
import Wrapper from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import customFetch from "../../utils/axios";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const teamId = localStorage.getItem("teamId");
  console.log(teamId);
  const {
    state: { startQuestion },
  } = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(startQuestion);
  const [currQuestionImg, setCurrQuestImg] = useState("");
  const [answer, setAnswer] = useState("");

  const fetchQuestion = async () => {
    try {
      console.log({ answer, teamId });
      const resp = await customFetch.post("/next", {
        answer: answer,
        teamId,
      });
      console.log(resp.data);
      const {
        msg,
        isComplete,
        nxtQuestion: { imageUrl, questionNumber },
      } = resp.data;
      if (isComplete) {
        toast.success("Thanks for participating !");
        localStorage.clear("teamId");
        navigate("/");
      } else {
        toast.success(msg);
        setCurrQuestImg(imageUrl);
        setCurrentQuestion(questionNumber);
        setAnswer("");
      }
    } catch (e) {
      console.log("Error = ", e);
      toast.error("Something went wrong ! try contacting admins");
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  if (!currQuestionImg || !currentQuestion) {
    <Loader />;
  }

  return (
    <Wrapper>
      <Paper className="question-paper" elevation={3}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Question {currentQuestion}:
        </Typography>
        <Box className="question-container" sx={{ mt: "1em" }}>
          <img src={currQuestionImg} alt="Question" className="question-img" />
        </Box>
        <TextField
          label="Your Answer"
          variant="outlined"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          sx={{ mt: "auto", minWidth: "200px" }}
          inputProps={{
            type: "number",
            min: 1,
            max: 40,
          }}
        />
        <Button variant="contained" sx={{ mt: "1em" }} onClick={fetchQuestion}>
          Next
        </Button>
      </Paper>
    </Wrapper>
  );
};

export default Dashboard;
