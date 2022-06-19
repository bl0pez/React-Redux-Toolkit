import {
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../store/slices/pokemon";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { BackUi, ButtonArrow } from "../ui";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, nextPage, backPage } = useSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        minWidth: "100%",
        color: "white",
        padding: "20px",
      }}
    >
      <Typography variant="h2" textAlign="center" sx={{ p: 2 }} component="div">
        Pokemons
      </Typography>
      <Grid container spacing={5}>
        {pokemons.map((p) => (
          <Grid item height={387} width={308} key={p.name}>
            <Card sx={{ p: 2 }}>
              <CardHeader sx={{ textAlign: "center" }} title={p.name} />
              <CardMedia component="img" image={p.img} alt="Paella dish" />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" padding={1} gap={1}>
          <ButtonArrow isLoading={isLoading} func={ () => dispatch(getPokemons(backPage)) }>
              <ArrowBack sx={{ fontSize: 30 }} />
          </ButtonArrow>
          <ButtonArrow isLoading={isLoading} func={ () => dispatch(getPokemons(nextPage)) }>
              <ArrowForward sx={{ fontSize: 30 }} />
          </ButtonArrow>
      </Grid>
      <BackUi />
    </Container>
  );
};
