import {
    Location as LocationType
} from "../types/Location";

export class Location implements LocationType {
    id?: string;
    name?: string;
    climate?: string;
    terrain?: string;
    surface_water?: string;
    residents?: string[];
    films?: string[];
    url: string;
    constructor(data: LocationType) {
        Object.assign(this, {
            ...data,
        });
    }
}