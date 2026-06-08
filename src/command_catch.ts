import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
    const name = args[0];
    if (!name) {
        throw new Error("Pokemon name is required. Usage: catch <pokemon-name>");
    }
    console.log(`Throwing a Pokeball at ${name}...`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const pokemonData = await response.json();
    const successRate = (Math.floor(Math.random() * 51)) / pokemonData.base_experience; // Simple success rate based on base experience

    if (successRate > .5) {
        console.log(successRate)
        console.log(`${pokemonData.name} was caught!`);
    } else {
        console.log(successRate)

        console.log(`${pokemonData.name} escaped!`);
    }
}