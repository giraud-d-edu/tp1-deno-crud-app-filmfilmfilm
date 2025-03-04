import * as service from '../services/acteur.service.ts';
import { Acteur } from '../models/acteur.model.ts';
import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";

export const getAllActeurs = (ctx: RouterContext<'/acteurs'>)=> {
    ctx.response.body = service.getAllActeurs
}
export const getActeurById = (ctx: RouterContext<'/acteurs/:id'>) => {
    ctx.response.body = service.getActeurById(parseInt(ctx.params.id));
}
export const createActeur = async (ctx: RouterContext<'/acteurs'>) => {
    ctx.response.body = service.createActeur(await ctx.request.body.json());
}
export const updateActeur = async (ctx: RouterContext<'/acteurs/:id'>) => {
    ctx.response.body = service.updateActeur(parseInt(ctx.params.id), await ctx.request.body.json())
}
export const deleteActeur = async (ctx: RouterContext<'/acteurs/:id'>) => {
    ctx.response.body = service.deleteActeur(parseInt(ctx.params.id));
}
