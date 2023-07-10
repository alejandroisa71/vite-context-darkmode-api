import { useEffect } from 'react';
import { useApiStore } from './store/apiStore';

const App = () => {
  const {pokemons,getPokemons} = useApiStore();

 useEffect(() => {
  getPokemons()
 }, []);

  return (
    <div>
      
      <hr />
      {JSON.stringify(pokemons)}
    </div>
  );
};
export default App;
