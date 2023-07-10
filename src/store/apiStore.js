import { create } from 'zustand';

export const useApiStore = create((set) => ({
  pokemons: [],
  getPokemons: async () => {

    //  poner try catch
    const pokemons = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();
    console.log(pokemons);
    set((state) => ({
      pokemons,
    }));
  },
}));
