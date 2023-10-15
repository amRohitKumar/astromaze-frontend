import { Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const data = [
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
  { teamLeader: "xyz", point: 8 },
];
const getColor = (idx) => {
  if (idx === 0) return "#FFD700";
  else if (idx === 1) return "#C0C0C0";
  else if (idx === 2) return "#967444";
  else return "var(--primary-light-clr)";
};
const Leaderboard = () => {
  return (
    <Paper sx={{ width: "40vw", minHeight: "80vh", p: "1em 2em", my: "2em" }}>
      <List>
        <ListItem
          disablePadding
          sx={{
            bgcolor: "var(--primary-clr)",
            color: "white",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "1.5em",
          }}
        >
          <ListItemButton
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Rank</Typography>
            <Typography align="center">Team Leader</Typography>
            <Typography>Points Scored</Typography>
          </ListItemButton>
        </ListItem>
        {data.map((el, idx) => (
          <>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Avatar sx={{ bgcolor: getColor(idx) }}>{idx + 1}</Avatar>
                <Typography>{el.teamLeader}</Typography>
                <Typography>{el.point}</Typography>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default Leaderboard;
