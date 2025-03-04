import { FilmDto } from "../dtos/film.dtos.ts";
import { film } from "./database.ts"
//@ts-ignore
import { ObjectId } from "https://deno.land/x/mongo@v0.31.2/mod.ts";

export async function getAllFilm(): Promise<FilmDto[]> {
    try {
        return film.find().toArray();
    } catch (error) {
        throw new Error("Erreur lors de la recuperation des acteurs\n"+error)
    }
}

export function getFilmById(id: string): FilmDto | undefined {
    try{
        return film.find({_id: new ObjectId(id)});
    } catch (error) {
        throw new Error("Erreur lors de la récupération de l'acteur "+id+ '\n'+ error)
    }
}

export function createFilm(filmData: FilmDto) {
    try {
        film.insertOne(filmData);
    } catch (error) {
        throw new Error("Erreur lors de l'ajour du nouvel acteur \n" + error)
    }
}

export function updateFilm(id: string, filmData: FilmDto) {
    try {
        film.updateOne({ _id: new ObjectId(id) }, { $set: { ...filmData } });
    } catch (error) {
        throw new Error("Erreur lors de la maj de l'acteur \n" + error)
    }
}

export function deletFilm(id: string) {
    try {
        film.deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
        throw new Error("Erreur lors de la suppression de l'utilisateur\n" + error)
    }
}