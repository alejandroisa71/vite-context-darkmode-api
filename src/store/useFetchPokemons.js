import { create } from 'zustand';

export const useFetchPokemons = create((set, get) => ({
  pokemons: [],
  getPokemons: async () => {
    //  poner try catch
    const pokemons = await (
      await fetch('https://pokeapi.co/api/v2/pokemon')
    ).json();
    set((state) => ({
      pokemons,
    }));
  },
  //usar get para ver 1 pokemon y mostrar imagenes y traer indices en 1.36v
}));
