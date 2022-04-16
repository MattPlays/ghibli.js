import { Film } from "./Film";
import { Location } from "./Location";
import { People } from "./People";
import { Species } from "./Species";
import { Vehicle } from "./Vehicle";


import { request } from "../../utils";
import { DEFAULT_HEADERS } from "../../constants";

export class API {
    constructor() {};


    Film = {
        Get: async (limit: number = 50): Promise<Film[]> => {
            const res = await request({
                url: `films/?limit=${limit}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Film[]>);
        },
        GetByID: async (id: string): Promise<Film> => {
            const res = await request({
                url: `films/${id}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Film>);
        }
    };

    Location = {
        Get: async (limit: number = 50): Promise<Location[]> => {
            const res = await request({
                url: `locations/?limit=${limit}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Location[]>);
        },
        GetByID: async (id: string): Promise<Location> => {
            const res = await request({
                url: `locations/${id}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Location>);
        }
    };

    People = {
        Get: async (limit: number = 50): Promise<People[]> => {
            const res = await request({
                url: `people/?limit=${limit}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<People[]>);
        },
        GetByID: async (id: string): Promise<People> => {
            const res = await request({
                url: `people/${id}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<People>);
        }
    };

    Species = {
        Get: async (limit: number = 50): Promise<Species[]> => {
            const res = await request({
                url: `species/?limit=${limit}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Species[]>);
        },
        GetByID: async (id: string): Promise<Species> => {
            const res = await request({
                url: `species/${id}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Species>);
        }
    };

    Vehicle = {
        Get: async (limit: number = 50): Promise<Vehicle[]> => {
            const res = await request({
                url: `vehicles/?limit=${limit}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Vehicle[]>);
        },
        GetByID: async (id: string): Promise<Vehicle> => {
            const res = await request({
                url: `vehicles/${id}`,
                headers: DEFAULT_HEADERS({})
            });
            return await (res.json() as Promise<Vehicle>);
        }
    };
}