import { Container } from '@mui/material';
import { CardUi } from './components/ui/CardUi';

function App() {
  return (
    <Container
      maxWidth
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <CardUi 
        title="Contador" 
        body="Contador de incrementar y decrementar con Redux Toolkit"/>

      <CardUi 
        title="Pokemon" 
        body="Peticiones a la api de pokemonsApi con Redux Toolkit"/>

      <CardUi 
        title="Todo"
        body="Lista de tareas por hacer con Redux Toolkit"/>
    </Container>
  );
}

export default App;
