import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardUi = ({ title, body, action }) => {
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
        <Button variant="contained" sx={{backgroundColor: "primary.main"}} >Ver</Button>
      </CardActions>
    </Card>
  );
};
