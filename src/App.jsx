import { useEffect } from 'react';
import { useFetchPokemons } from './store/useFetchPokemons';

const App = () => {
  const { pokemons, getPokemons } = useFetchPokemons();

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemons.results);

  return (
    <div>
      <hr />
      {JSON.stringify(pokemons)}
    </div>
  );
};
export default App;
