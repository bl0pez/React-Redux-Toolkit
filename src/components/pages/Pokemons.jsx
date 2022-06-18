import { Card, CardMedia, Container, Grid, Pagination, Typography } from "@mui/material";
import { padding } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../store/slices/pokemon";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const [pokemonL, setpokemonL] = useState([])

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  console.log(pokemons);


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
      <Typography variant="h2" textAlign="center" component="div">
        Pokemons
      </Typography>
      {/* <Grid container spacing={3}>
        {pokemonL?.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image={p.sprites.front_default}
                alt="Paella dish"
              />

            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Pagination count={10}/>
    </Container>
  );
};
