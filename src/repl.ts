import { getCommands } from "./get_commands.js";
import { State } from "./state.js";
export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ");
}

export function startREPL(state: State) {


    state.rl.prompt();
    state.rl.on("line", (input: string) => {
        const cleanArr = cleanInput(input)
        if(!cleanArr[0]){
            state.rl.prompt()
            return;
        }

        const commandName = cleanArr[0];
        const commands = state.commands;
        const cmd = commands[commandName]
        
        if(cmd) {
            cmd.callback(state, ...cleanArr.slice(1));
        } 
        else{
            console.log("Unknown command")
        }
        state.rl.prompt();
    })
}