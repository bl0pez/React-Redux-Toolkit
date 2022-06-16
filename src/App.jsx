import { Card, Grid } from '@mui/material';

function App() {
  return (
    <Grid
      container
      gap={1}
      sx={{ justifyContent:'start', flexGrow: 1 ,minHeight: '100vh', backgroundColor: 'primary.main', p: 2}}>
      <Card 
      
      sx={{ minWidth: 275, p: 1 }}  xs={12}>
        Pokemon
      </Card>
      <Card 
      
      sx={{ minWidth: 275, p: 1 }} xs={12}>
        Contador
      </Card>
      <Card 
      
      sx={{ minWidth: 275, p: 1 }} xs={12}>
          Todo
      </Card>
    </Grid>
  )
}

export default App
