import { Film } from "../model/film.model.ts";
import * as repositories from "../repositories/film.repositories.ts";

export function getAllFilm(): Promise<Film[]> {
    const films = repositories.getAllFilm();

    if (films) {
        return films;
    } else {
        throw { status: 404, message: "No films found" };
    }
}

export function getFilmById(id: string): Film {
    const film = repositories.getFilmById(id);

    if (film) {
        return film;
    } else {
        throw { status: 404, message: "No film found with this id: " + id }
    }
}

// export function createFilm(film: FilmDto) {
//     const createFilm: Film = {
//         id: repositories.getLastIndex() + 2,
//         titre: film.titre,
//         synopsis: film.synopsis,
//         realisateur: film.realisateur,
//         dateDeSortie: film.dateDeSortie,
//         duree: film.duree,
//         acteurs: film.acteurs,
//     }

//     repositories.createFilm(createFilm)
//     return { status: 202, message: "Your film is created" }
// }

// export function updateFilm(id: number, film: FilmDto) {
//     const idExist = repositories.getIfIdIsInFilm(id);
//     if (!idExist) {
//         throw { status: 404, message: "You cannot update this film because your id is wrong" }
//     }

//     const updateFilm: Film = {
//         id: id,
//         titre: film.titre,
//         synopsis: film.synopsis,
//         realisateur: film.realisateur,
//         dateDeSortie: film.dateDeSortie,
//         duree: film.duree,
//         acteurs: film.acteurs,
//     }

//     repositories.updateFilm(updateFilm);
//     return { status: 202, message: "Your film is updated" }
// }

// export function deleteFilm(id: number) {
//     const idExist = repositories.getIfIdIsInFilm(id);
//     if (!idExist) {
//         throw { status: 404, message: "You cannot delete this film because your id is wrong" }
//     }

//     repositories.deletFilm(id);
//     return { status: 202, message: "Your film is deleted" }
// }