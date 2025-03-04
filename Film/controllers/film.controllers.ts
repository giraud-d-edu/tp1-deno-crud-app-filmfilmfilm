import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as service from "../services/film.service.ts";

export const getAllFilms = (ctx: RouterContext<"/films">) => {
    ctx.response.body = service.getAllFilm;
};

export const getFilmById = (ctx: RouterContext<"/films/:id">) => {
    ctx.response.body = service.getFilmById(ctx.params.id);
}

// export const createFilm = async (ctx: RouterContext<"/films">) => {
//     const body = await ctx.request.body.json();
//     service.createFilm(body);
//     ctx.response.status = 201;
//     ctx.response.message = "Your film is created";
// }

// export const updateFilm = async (ctx: RouterContext<"/films/:id">) => {
//     const id = parseInt(ctx.params.id);
//     const body = await ctx.request.body.json();
//     service.updateFilm(id, body);
// }

// export const deleteFilm = (ctx: RouterContext<"/films/:id">) => {
//     service.deleteFilm(parseInt(ctx.params.id));
// }