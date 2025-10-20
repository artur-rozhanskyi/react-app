import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router";

export const QuestionListItem = ({ question }) => {

  const { title, body, id } = question;
  const icon = undefined;

  return (
    <>
      <ListItem
        alignItems="flex-start"
        component={NavLink}
        to={`/questions/${id}`}
        end
        sx={{
          "&.active": {
            backgroundColor: "action.selected",
          },
        }}
      >
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
