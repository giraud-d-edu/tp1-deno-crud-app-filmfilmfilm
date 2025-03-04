//@ts-ignore
import { ObjectId } from "https://deno.land/x/mongo@v0.31.2/mod.ts";

export interface ActeurDbo{
    _id : ObjectId,
    nom: string;
    prenom: string;
    age: number;
    dateDeNaissance: string;
    nationalite: string;
}