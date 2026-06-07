type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache: Map<string, CacheEntry<any>>;
    #reapIntervalId: NodeJS.Timeout | undefined
    #interval: number;


    constructor(number: number) {
        this.#cache = new Map<string, CacheEntry<any>>();
        this.#reapIntervalId = undefined;
        this.#interval = number;
        this.#startReapLoop();

    }


    add<T>(key: string, value: T): void {
        this.#cache.set(key, { createdAt: Date.now(), val: value });
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        if(entry) {
            return entry.val;
        }
        return undefined;  
    }

    #reap(): void {
        this.#cache.forEach((entry,key) => {
            if(Date.now() - this.#interval > entry.createdAt) {
                this.#cache.delete(key);
            }
        });
    }
    #startReapLoop(): void {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval); 
    }
    stopReapLoop(): void {
        if(this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }

    }
}