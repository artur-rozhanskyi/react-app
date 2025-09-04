import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { useCallback } from "react";

export const QuestionListItem = ({ question }) => {
  const navigate = useNavigate();

  const { title, body, id } = question;
  const icon = undefined;

  const redirectToQuestion = useCallback(() => {
    navigate(`/questions/${id}`);
  }, [navigate, id]);

  return (
    <>
      <ListItem alignItems="flex-start" button onClick={redirectToQuestion}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.main" }}>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {body}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
