import { IconButton } from "@mui/material";

export const ButtonArrow = ({children, isLoading, func}) => {

  return (
      <IconButton
        disabled={isLoading}
        onClick={func}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "#f44336",
          ":action": { backgroundColor: "error.main", opacity: 0.6 },
        }}
      >
        {children}
      </IconButton>
  );
};
