import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const BackUi = () => {
  return (
    <Link to="/">
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.6 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <ArrowBack sx={{ fontSize: 30 }} />
      </IconButton>
    </Link>
  );
};
