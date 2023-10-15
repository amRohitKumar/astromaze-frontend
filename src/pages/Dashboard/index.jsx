import { useEffect, useState } from "react";
import { Paper, TextField, Typography, Button, Box } from "@mui/material";
import Wrapper from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import customFetch from "../../utils/axios";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const teamId = localStorage.getItem("teamId");
  console.log(teamId);
  const {
    state: { startQuestion },
  } = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(startQuestion);
  const [currQuestionImg, setCurrQuestImg] = useState("");
  const [answer, setAnswer] = useState("");

  const fetchQuestion = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      setLoading(true);
      // console.log({ answer, teamId });
      const resp = await customFetch.post("/next", {
        answer: answer,
        teamId,
      });
      console.log(resp.data);
      const { msg, isComplete, nxtQuestion } = resp.data;
      console.log(isComplete);
      setLoading(false);
      if (isComplete) {
        toast.success("Thanks for participating !");
        localStorage.clear("teamId");
        return navigate("/");
      } else {
        const { imageUrl, questionNumber } = nxtQuestion;
        toast.success(msg);
        setCurrQuestImg(imageUrl);
        setCurrentQuestion(questionNumber);
        setAnswer("");
      }
    } catch (e) {
      setLoading(false);
      console.log("Error = ", e);
      toast.error(
        e?.response?.data?.msg || "Something went wrong ! try contacting admins"
      );
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  // if (!currQuestionImg || !currentQuestion || loading) {
  //   return <Loader />;
  // }

  return (
    <Wrapper>
      {(!currQuestionImg || !currentQuestion || loading) && <Loader />}
      <Paper
        className="question-paper"
        elevation={3}
        component="form"
        onSubmit={fetchQuestion}
      >
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
            max: 33,
            step: 1,
          }}
        />
        <Button variant="contained" sx={{ mt: "1em" }} type="submit">
          Next
        </Button>
      </Paper>
    </Wrapper>
  );
};

export default Dashboard;
