import { Film } from "../model/film.model.ts";

const films: Film[] = [
    { id: 1, titre: "Spiderman", synopsis: "Super héros ayant les pouvoirs d'une araignée devenant un homme araignée, portant un costume et se faisait appelé Spider-man", realisateur: "Stan Lee", dateDeSortie: "2009", duree: "2h20", acteurs: [] },
    { id: 2, titre: "Pirate des Caraibes", synopsis: "Pirate a la recherche de trésors et maudit", realisateur: "PirateGood", dateDeSortie: "2007", duree: "1h47", acteurs: [] },
    { id: 3, titre: "Charlie et la Chocolaterie", synopsis: "Gagner un ticker d'or dans un gateau permettant de visité l'usine de chocolat d'un gros producteur", realisateur: "Tim Burton", dateDeSortie: "2009", duree: "2h20", acteurs: [] },
    { id: 4, titre: "Harry Potter", synopsis: "Un adolescent devient socier et doit sauver son école de sorcier contre Voldemort", realisateur: "Mike Newell", dateDeSortie: "2005", duree: "2h32", acteurs: [] }
]

export function getLastIndex(): number {
    return films.findIndex(film => film.id === films.length);
}

export function getIfIdIsInFilm(id: number): Film | undefined {
    return films.find(film => film.id === id)
}

export function getAllFilm(): Film[] {
    return films;
}

export function getFilmById(id: number): Film | undefined {
    return films.find(film => film.id === id);
}

export function createFilm(film: Film) {
    films.push(film);
}

export function updateFilm(film: Film) {
    const index = films.findIndex(f => f.id === film.id);
    films[index] = film;
}

export function deletFilm(id: number) {
    const index = films.findIndex(film => film.id === id);
    films.splice(index)
}