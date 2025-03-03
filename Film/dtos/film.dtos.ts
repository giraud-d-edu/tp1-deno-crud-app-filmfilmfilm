import { ActeurDto } from "../../Acteur/dtos/acteur.dtos";

export interface FilmDto {
    titre: string;
    synopsis: string;
    realisateur: string;
    dateDeSortie: string;
    duree: string;
    acteurs: ActeurDto[];
}