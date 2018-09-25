import axios from 'axios';
// import { pokeList } from 'utils/stubData';

export const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

// disclaimer: i'm using stubdata for now as pokeapi.co is down for a couple of days now.
// I tried making a request from axios or using pokedex-promise-v2 library to no avail
// export const getPokeList = () => pokeList;

export const getPokeList = () =>
  axiosInstance.get('/pokemon/').then(response => response.data);

export const getPokeNature = () =>
  axiosInstance.get('/nature/').then(response => response.data);

export const getSpecificPokemon = id =>
  axiosInstance.get(`/pokemon/${id}`).then(response => response.data);
