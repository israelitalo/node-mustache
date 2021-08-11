import { pets, ITypesPets, IPet } from "../utils/pets";

export default class Pet {
    public getAll(): IPet[] {
        return pets;
    }

    public getWithType(type: ITypesPets): IPet[] {
        return pets.filter((pet) => pet.type === type);
    }

    public getFromName(name: string): IPet[] {
        return pets.filter((pet) =>
            pet.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }

}