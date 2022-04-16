import {
    People as PeopleType
} from "../types/People";

export class People implements PeopleType {
    id?: string;
    name?: string;
    gender?: string;
    eye_color?: string;
    hair_color?: string;
    films?: string[];
    species?: string[];
    url: string;

    constructor(data: PeopleType) {
        Object.assign(this, {
            ...data,
        });
    }
}