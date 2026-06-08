import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const locationName = args[0];
    if (!locationName) {
        throw new Error("Location name is required. Usage: explore <location-name>");
    }

    const location = await state.pokeAPI.fetchLocation(locationName);
    const pokemonNames = location.pokemon_encounters.map((encounter) => encounter.pokemon.name);
    console.log(`Exploring ${location.name}...`);
    console.log(`Found Pokemon:`)
    for (const pokemonName of pokemonNames) {
        console.log(` - ${pokemonName}`);
    }
    
}