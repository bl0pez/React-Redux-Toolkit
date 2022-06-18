import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CardUi = ({ title, body, url = '/' }) => {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 275, p: 1, height: 300 }} xs={12}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => {navigate(url)}} sx={{backgroundColor: "primary.main"}} >Ver</Button>
      </CardActions>
    </Card>
  );
};
