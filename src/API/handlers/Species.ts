import {
    Species as SpeciesType
} from "../types/Species";


export class Species implements SpeciesType {
    id?: string;
    name?: string;
    classification?: string;
    eye_colors?: string;
    hair_colors?: string;
    url: string;
    people?: string[];
    films?: string[];

    constructor(data: SpeciesType) {
        Object.assign(this, {
            ...data,
        });
    }
}