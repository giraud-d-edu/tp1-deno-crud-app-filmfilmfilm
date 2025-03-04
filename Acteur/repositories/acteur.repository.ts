import { Acteur } from '../models/acteur.model.ts';
import { ActeurDto } from '../dtos/acteur.dtos.ts';
import { acteurs } from './db.ts';
//@ts-ignore
import { ObjectId } from "https://deno.land/x/mongo@v0.31.2/mod.ts";


export function getAllActeurs(): Acteur[] {
    try {
        return acteurs.find().toArray();
    } catch (error){
        throw new Error("Erreur lors de la recuperation des acteurs\n"+error)
    }
}
export function getActeurById(id: string): Acteur {
    try{
    return acteurs.find({_id: new ObjectId(id)});
    } catch (error) {
        throw new Error("Erreur lors de la récupération de l'acteur "+id+ '\n'+ error)
    }
}
export function addActeur(acteur: ActeurDto) {
    try {
        acteurs.insertOne(acteur);
    } catch (error) {
        throw new Error("Erreur lors de l'ajour du nouvel acteur \n" + error)
    }
}
export function updateActeur(id: string, acteur: ActeurDto) {
    try {
        acteurs.updateOne({ _id: new ObjectId(id) }, { $set: { ...acteur } });
    } catch (error) {
        throw new Error("Erreur lors de la maj de l'acteur \n" + error)
    }
}
export function deleteActeur(id: string) {
    try {
        acteurs.deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
        throw new Error("Erreur lors de la suppression de l'utilisateur\n" + error)
    }
}

