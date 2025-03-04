import { Acteur } from '../models/acteur.model.ts';

const acteurs: Acteur[] = [
    { id: 1, nom: "Depp", prenom: "Johnny", age: 57, dateDeNaissance: "1963-06-09", nationalite: "Américain" },
    { id: 2, nom: "Tobey", prenom: "Maguire", age: 56, dateDeNaissance: "1975-06-27", nationalite: "Américain" },
    { id: 3, nom: "DiCaprio", prenom: "Leonardo", age: 46, dateDeNaissance: "1974-11-11", nationalite: "Américain" },
    { id: 4, nom: "Pitt", prenom: "Brad", age: 57, dateDeNaissance: "1963-12-18", nationalite: "Américain" },
    { id: 5, nom: "Clooney", prenom: "George", age: 59, dateDeNaissance: "1961-05-06", nationalite: "Américain" },
    { id: 6, nom: "Niney", prenom: "Pierre", age: 31, dateDeNaissance: "1989-03-13", nationalite: "Français" },
    { id: 7, nom: "Dujardin", prenom: "Jean", age: 48, dateDeNaissance: "1972-06-19", nationalite: "Français" },
    { id: 8, nom: "Watson", prenom: "Emma", age: 30, dateDeNaissance: "1990-04-15", nationalite: "Britannique" },
    { id: 9, nom: "Radcliffe", prenom: "Daniel", age: 31, dateDeNaissance: "1989-07-23", nationalite: "Britannique" },
    { id: 10, nom: "L. Jackson", prenom: "Samuel", age: 71, dateDeNaissance: "1948-12-21", nationalite: "Américain" }
];

export function getLastIndex(): number {
    return acteurs.findIndex(a => a.id === acteurs.length);
}
export function getAllActeurs(): Acteur[] {
    return acteurs;
}
export function getActeurById(id: number): Acteur | undefined {
    return acteurs.find(a => a.id === id);
}
export function addActeur(acteur: Acteur) {
    const index = acteurs.length;
    acteur.id = index + 1;
    acteurs.push(acteur);
}
export function updateActeur(acteur: Acteur) {
    const index = acteurs.findIndex(a => a.id === acteur.id);
    console.log(index);
    acteurs[index] = acteur;
}
export function deleteActeur(id: number) {
    const index = acteurs.findIndex(a => a.id === id);
    acteurs.splice(index, 1);
}

