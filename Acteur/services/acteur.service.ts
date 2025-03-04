import * as repo from '../repositories/acteur.repository.ts';
import { Acteur } from '../models/acteur.model.ts';
import { ActeurDto } from '../dtos/acteur.dtos.ts';

export function getAllActeurs(): Acteur[] {
    if (!repo.getAllActeurs()) {
        throw { status: 404, message: "No actors found" };
    } else {
        return repo.getAllActeurs();
    }
}

export function getActeurById(id: number): Acteur {
    const acteur = repo.getActeurById(id);
    if (!acteur) {
        throw { status: 404, message: "Actor not found" };
    }
    return acteur;
}

export function createActeur(acteurDto: ActeurDto) {
    const allActeurs = repo.getAllActeurs().length;
    const acteur: Acteur = {
        id: allActeurs + 1,
        nom : acteurDto.nom,
        prenom : acteurDto.prenom,
        age : acteurDto.age,
        dateDeNaissance : acteurDto.dateDeNaissance,
        nationalite : acteurDto.nationalite,
    };
    repo.addActeur(acteur);
}

export function updateActeur(id: number, acteurDto: ActeurDto) {
    const acteur = repo.getActeurById(id);
    if (!acteur) {
        throw { status: 404, message: "Actor not found" };
    } else {
        const acteurUpdate: Acteur = {
            id: id,
            nom: acteurDto.nom,
            prenom: acteurDto.prenom,
            age: acteurDto.age,
            dateDeNaissance: acteurDto.dateDeNaissance,
            nationalite: acteurDto.nationalite,
        };
        repo.updateActeur(acteurUpdate);
    }
    
}

export function deleteActeur(id: number) {
    const acteur = repo.getActeurById(id);
    if (!acteur) {
        throw { status: 404, message: "Actor not found" };
    }
    else {
        repo.deleteActeur(id);
    }
}