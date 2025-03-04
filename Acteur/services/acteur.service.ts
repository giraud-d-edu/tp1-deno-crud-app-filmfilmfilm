import * as repo from '../repositories/acteur.repository.ts';
import { Acteur } from '../models/acteur.model.ts';
import { ActeurDto } from '../dtos/acteur.dtos.ts';

export function getAllActeurs(): Acteur[] {
    return repo.getAllActeurs();
}

export function getActeurById(id: string): Acteur {
    if (!id) {
        throw new Error("Invalid actor id");
    }
    return repo.getActeurById(id);
}

export function createActeur(acteurDto: ActeurDto){
        repo.addActeur(acteurDto);
}

export function updateActeur(id: string, acteurDto: ActeurDto) {
    if (!id){
        throw { status: 404, message: "Actor to update not found"};
    }
    if (Object.keys(acteurDto).length < 1) {
        throw { status: 400, message: "Actor update given is empty"}
    }
    repo.updateActeur(id,acteurDto);
}

export function deleteActeur(id: string) {
    if (!id) {
        throw { status: 404, message: "Invalid actor id" };
    }
    repo.deleteActeur(id);
}