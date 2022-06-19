import { Main } from "../layouts/Main";
import { CardUi } from "../ui/CardUi";

export const Home = () => {
  return (
    <Main>
      <CardUi
        title="Contador"
        body="Contador de incrementar y decrementar con Redux-Toolkit"
        url="counter"
      />

      <CardUi
        title="Pokemon"
        body="Peticiones a la api de pokemonsApi con axios y Redux-Toolkit"
        url="pokemons"
      />

      <CardUi 
        title="Todo" 
        body="Lista de todo con Redux-Toolkit y RKT Query"
        url="todos" 
        />
    </Main>
  );
};
