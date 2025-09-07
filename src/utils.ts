import { pokemonTypes } from './types';

export function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export interface RawPokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: {
    other: { home: { front_default: string } };
  };
}

export const fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon with Dex number ${id}.`);
  }

  const data = (await response.json()) as RawPokemon;

  return {
    id: data.id,
    name: capitalize(data.name),
    types: data.types.map((t: any) => capitalize(t.type.name)),
    sprite: data.sprites.other.home.front_default,
  };
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calculateDexNumber = (scores: Record<string, number>): number => {
  const personalityStr = Object.entries(scores)
    .map(([key, val]) => `${key}${val}`)
    .join('');
  const hash = (simpleHash(personalityStr) % 1025) + 1;
  return hash;
};

export const mapLuckyNumberToTerastalType = (num: number): string => {
  const index = simpleHash(num.toString()) % pokemonTypes.length;
  return pokemonTypes[index]!;
};
