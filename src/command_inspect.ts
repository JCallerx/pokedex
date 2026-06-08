import { State } from "./state.js";
export async function commandInspect(state: State, ...args: string[]) {
    const pokemonName = args[0];
    if (!pokemonName) {
        console.log("Pokemon name is required. Usage: inspect <pokemon-name>");
        return;
    }
    if (!(pokemonName in state.caughtPokemon)) {
        console.log(`You have not caught ${pokemonName} yet!`);
        return;
    }

    const pokemonData = state.caughtPokemon[pokemonName];
    const stats = pokemonData.stats.map((obj) => `-${obj.stat.name}: ${obj.base_stat}`);
    const types = pokemonData.types.map((obj) => `-${obj.type.name}`)

    console.log(`Inspecting ${pokemonName}...`);
    console.log(`Name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log(`Weight: ${pokemonData.weight}`);
    console.log(`Stats:\n ${stats.join("\n")}`);
    console.log(`Types:\n ${types.join("\n")}`)
}   