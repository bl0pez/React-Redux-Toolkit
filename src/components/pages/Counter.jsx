import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../../store/slices/counter";
import { Main } from "../layouts/Main";
import { BackUi } from "../ui/BackUi";

export const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Main>
      <Box
        sx={{
          backgroundColor: "white",
          padding: 2,
        }}
      >
        <Typography variant="h3" textAlign="center" component="div">
          Contador: {counter}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Button variant="contained" onClick={() => dispatch(increment())}>
            Incremet +
          </Button>
          <Button
            variant="contained"
            sx={{ mx: 1 }}
            onClick={() => dispatch(decrement())}
          >
            Decrement -
          </Button>
          <Button variant="contained" onClick={() => dispatch(incrementBy(2))}>
            Increment by 2+
          </Button>
        </Box>
      </Box>
        <BackUi />
    </Main>
  );
};
