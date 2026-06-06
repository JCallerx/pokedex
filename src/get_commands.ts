import { commandExit } from "./command_exit.js";
import { CLICommand } from "./state.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";

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
    };
}