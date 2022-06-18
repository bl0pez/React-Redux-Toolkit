import { Route, Routes } from 'react-router-dom'
import { Home, Counter, Pokemons,Todos } from '../components/pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route  path='/counter' element={<Counter /> } />
        <Route  path='/pokemons' element={<Pokemons />} />
        <Route   path='/todos' element={<Todos />} />
        <Route   path='*' element={<Home />} />
    </Routes>
  )
}
