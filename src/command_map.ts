import { State } from "./state.js";

export async function commandMap(state: State) {
    const data = await state.pokeAPI.fetchLocations(state.nextPageURL ?? undefined);
    data.results.map((location) => {
        console.log(location.name);
    })
    state.nextPageURL = data.next;
    state.previousPageURL = data.previous;
}