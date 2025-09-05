interface RawPokemon {
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
    types: data.types.map((t: any) => t.type.name),
    sprite: data.sprites.other.home.front_default,
  };
};

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
