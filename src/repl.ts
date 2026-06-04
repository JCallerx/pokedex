import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(" ");
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    })

    rl.prompt();
    rl.on("line", (input: string) => {
        const cleanArr = cleanInput(input)
        if(!input){
            rl.prompt()
        }
        console.log(`Your command was: ${cleanArr[0]}`)
        rl.prompt()
    })
}