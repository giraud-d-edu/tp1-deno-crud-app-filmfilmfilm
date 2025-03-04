import { ObjectId } from "https://deno.land/x/mongo@v0.31.2/mod.ts";

export interface FilmDBO {
    _id: ObjectId,
    titre: string,
    nopsis: string;
    realisateur: string;
    dateDeSortie: string;
    duree: string;
    acteurs: []
}