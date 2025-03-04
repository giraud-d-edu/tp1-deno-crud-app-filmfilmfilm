//@ts-ignore
import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as service from "../services/film.service.ts";

export const getAllFilms = (ctx: RouterContext<"/films">) => {
    try { 
        ctx.response.body = service.getAllFilm; 
    } catch (error) {
        ctx.response.status = 404;
    }
};

export const getFilmById = (ctx: RouterContext<"/films/:id">) => {
    try {
        ctx.response.body = service.getFilmById(ctx.params.id);
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}

export const createFilm = async (ctx: RouterContext<"/films">) => {
    try {
        const body = await ctx.request.body.json();
        service.createFilm(body);
        ctx.response.body = { status: 201, message: "Your film is created" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}

export const updateFilm = async (ctx: RouterContext<"/films/:id">) => {
    try {
        const id = ctx.params.id;
        const body = await ctx.request.body.json();
        service.updateFilm(id, body);
        ctx.response.body = { status: 202, message: "Acteur modifié" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}

export const deleteFilm = (ctx: RouterContext<"/films/:id">) => {
    try {
        service.deleteFilm(ctx.params.id);
        ctx.response.body = { status: 202, message: "Acteur supprimé" };
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = (error as Error).message;
    }
}