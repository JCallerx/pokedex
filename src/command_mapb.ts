import { State } from "./state.js";

export async function commandMapb(state: State) {
    if(!state.previousPageURL) {
        console.log("you're on the first page")
        return;
    }
    const data = await state.pokeAPI.fetchLocations(state.previousPageURL ?? undefined);
    data.results.map((location) => {
        console.log(location.name);
    })

    state.nextPageURL = data.next;
    state.previousPageURL = data.previous;
}