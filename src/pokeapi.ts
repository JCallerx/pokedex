export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
    const locationsURL = pageURL || `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(locationsURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const data: ShallowLocations = await response.json();
    return data;
} catch (error) {
    throw new Error (`Error fetching locations: ${(error as Error).message}`);
}
  }

  async fetchLocation(locationName: string): Promise<Location> {
    throw new Error("Method not implemented.");
  }
}


  
export type Location = {
      // add properties here
    };
    
export type ShallowLocations = {
        count: number;
        next: string | null;
        previous: string | null;
        results: {
            name: string;
            url: string;
        }[];
    }
