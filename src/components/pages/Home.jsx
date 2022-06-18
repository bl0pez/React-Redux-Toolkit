import { Main } from "../layouts/Main";
import { CardUi } from "../ui/CardUi";

export const Home = () => {
  return (
    <Main>
      <CardUi
        title="Contador"
        body="Contador de incrementar y decrementar con Redux Toolkit"
        url="counter"
      />

      <CardUi
        title="Pokemon"
        body="Peticiones a la api de pokemonsApi con Redux Toolkit"
        url="pokemons"
      />

      <CardUi 
        title="Todo" 
        body="Lista de tareas por hacer con Redux Toolkit"
        url="todos" 
        />
    </Main>
  );
};
