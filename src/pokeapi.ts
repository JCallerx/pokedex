import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
   #cache: Cache;
  constructor(interval: number) {
    this.#cache = new Cache(interval)
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
    const locationsURL = pageURL || `${PokeAPI.baseURL}/location-area`;

    //check cache
    const cachedData = this.#cache.get<ShallowLocations>(locationsURL);
    if(cachedData) {
      console.log("cache hit");
      return cachedData;
    }
    console.log("cache miss")

    const response = await fetch(locationsURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const data: ShallowLocations = await response.json();
    this.#cache.add(locationsURL, data);
    return data;
} catch (error) {
    throw new Error (`Error fetching locations: ${(error as Error).message}`);
}
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
      
      //check cache
      const cachedData = this.#cache.get<Location>(locationURL);
      if(cachedData) {
        return cachedData;
      }

      const response = await fetch(locationURL);
      if (!response.ok) {
        throw new Error(`Failed to fetch location: ${response.statusText}`);
      }
      const data: Location = await response.json();
      this.#cache.add(locationURL, data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching location: ${(error as Error).message}`);
    }
  }

  
}

export interface Location {
  encounter_method_rates: EncounterMethodRate[]
  game_index: number
  id: number
  name: string
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export interface EncounterMethod {
  name: string
  url: string
}

export interface VersionDetail {
  rate: number
  version: Version
}

export interface Version {
  name: string
  url: string
}


export interface Name {
  language: Language
  name: string
}

export interface Language {
  name: string
  url: string
}

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export interface Pokemon  {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
    // ... official artwork and other sprites nested here
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export interface VersionDetail2 {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: Version2
}

export interface EncounterDetail {
  chance: number
  condition_values: ConditionValue[]
  max_level: number
  method: Method
  min_level: number
}

export interface ConditionValue {
  name: string
  url: string
}

export interface Method {
  name: string
  url: string
}

export interface Version2 {
  name: string
  url: string
}


export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};
