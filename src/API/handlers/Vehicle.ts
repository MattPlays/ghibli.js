import {
    Vehicle as VehicleType
} from "../types/Vehicle";

export class Vehicle implements VehicleType {
    id?: string;
    name?: string;
    description?: string;
    vehicle_class?: string;
    length?: string;
    pilot?: string;
    films?: string[];
    url: string;

    constructor(data: VehicleType) {
        Object.assign(this, {
            ...data,
        });
    }
};