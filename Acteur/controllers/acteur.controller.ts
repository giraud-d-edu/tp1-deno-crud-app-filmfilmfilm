import * as service from '../services/acteur.service.ts';
import { Acteur } from '../models/acteur.model.ts';
import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";

export const getAllActeurs = (ctx: RouterContext<'/acteurs'>) => {
    try { ctx.response.body = service.getAllActeurs }
    catch (error) {
        ctx.response.status = 404;
        ctx.response.body = (error as Error).message;
    }
}
export const getActeurById = (ctx: RouterContext<'/acteurs/:id'>) => {
    try {
        ctx.response.body = service.getActeurById(ctx.params.id);
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}
export const createActeur = async (ctx: RouterContext<'/acteurs'>) => {
    
    try {
        service.createActeur(await ctx.request.body.json())
        ctx.response.body = { message: "Acteur créé" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}
export const updateActeur = async (ctx: RouterContext<'/acteurs/:id'>) => {
    try {
        service.updateActeur(ctx.params.id, await ctx.request.body.json())
        ctx.response.body = { message: "Acteur modifié" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}
export const deleteActeur = async (ctx: RouterContext<'/acteurs/:id'>) => {
    try {
        service.deleteActeur(ctx.params.id);
        ctx.response.body = { message: "Acteur supprimé" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}
