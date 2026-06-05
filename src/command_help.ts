import { CLICommand, State } from "./state.js";


export function commandHelp(state: State) {

    let registries = ""
    for (const [key, value] of Object.entries(state.commands)) {
        registries += `${key}: ${value.description}\n`;
    }

    console.log(`Welcome to the Pokedex!
Usage:

${registries}
`)
}

