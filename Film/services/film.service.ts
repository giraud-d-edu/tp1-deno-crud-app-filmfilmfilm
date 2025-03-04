import { Film } from "../model/film.model.ts";
import { FilmDto } from "../dtos/film.dtos.ts";
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

export function createFilm(film: FilmDto) {
    repositories.createFilm(film)
}

export function updateFilm(id: string, film: FilmDto) {
    if(!id) {
        throw { status: 404, message: "Film to update not found"};
    }
    if (Object.keys(film).length < 1) {
        throw { status: 400, message: "Actor update given is empty"}
    }
    repositories.updateFilm(id, film);
    return { status: 202, message: "Your film is updated" }
}

export function deleteFilm(id: string) {
    if (!id) {
        throw { status: 404, message: "Invalid film id" };
    }

    repositories.deletFilm(id);
    return { status: 202, message: "Your film is deleted" }
}