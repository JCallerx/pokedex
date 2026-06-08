import { State } from "./state.js"

export async function commandPokedex(state: State) {
    const caughtNames = Object.keys(state.caughtPokemon);

    if (caughtNames.length === 0) {
        console.log("You haven't caught any Pokémon yet.");
        return;
    }

    console.log("Your Pokedex:");
    for (const name of caughtNames) {
        console.log(`- ${name}`);
    }
}