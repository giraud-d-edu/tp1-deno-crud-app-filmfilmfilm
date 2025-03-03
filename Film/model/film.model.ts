import { Acteur } from "../../Acteur/model/acteur.model";

export interface Film {
    id: number;
    titre: string;
    synopsis: string;
    realisateur: string;
    dateDeSortie: string;
    duree: string;
    acteurs: Acteur[];
}