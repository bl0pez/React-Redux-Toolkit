import { Container } from "@mui/system";

export const Main = ({ children }) => {
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        minWidth:'100%',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {children}
    </Container>
  );
};
