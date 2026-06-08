import { commandExit } from "./command_exit.js";
import { CLICommand } from "./state.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Lists all available commands",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Lists locations in the current page",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Lists locations in the previous page",
            callback: commandMapb
        },
        explore: {
            name: "explore",
            description: "Explores a location and lists the pokemon that can be found there. Usage: explore <location-name>",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Attempts to catch a pokemon. Usage: catch <pokemon-name>",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Attempts to inspect a pokemon that has been caught. Usage: inspect <pokemon-name",
            callback: commandInspect
        }
    };
}