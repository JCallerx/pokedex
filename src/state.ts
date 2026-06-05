import { stdin, stdout } from "process";
import { createInterface, type Interface } from "readline";
import { getCommands } from "./get_commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export type State = {
    commands: Record<string, CLICommand>;
    rl: Interface;
    pokeAPI: PokeAPI
    nextPageURL?: string | null;
    previousPageURL?: string | null;
}

export function initState(): State {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    })

    return {
        commands: getCommands(),
        rl,
        pokeAPI: new PokeAPI(),
    }
}