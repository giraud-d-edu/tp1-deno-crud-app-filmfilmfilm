import { Acteur } from "../../Acteur/model/acteur.model.ts";

export interface FilmDto {
    titre: string;
    synopsis: string;
    realisateur: string;
    dateDeSortie: string;
    duree: string;
    acteurs: Acteur[];
}