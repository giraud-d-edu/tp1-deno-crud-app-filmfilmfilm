//@ts-ignore
import { Application } from "jsr:@oak/oak/application";
//@ts-ignore
import { Router } from "jsr:@oak/oak/router";
import * as ActeurController from "./controllers/acteur.controller.ts"
import * as FilmController from "./controllers/film.controller.ts"

const router = new Router();

router
.get("/films", FilmController.getAllFilms)
.get("/films/:id", FilmController.getFilmById)
.post("/films", FilmController.createFilm)
.put("/films/:id", FilmController.updateFilm)
.delete("/films/:id", FilmController.deleteFilm);

router
.get('/acteurs', ActeurController.getAllActeurs)
.get('/acteurs/:id', ActeurController.getActeurById)
.post('/acteurs', ActeurController.createActeur)
.put('/acteurs/:id', ActeurController.updateActeur)
.delete('/acteurs/:id', ActeurController.deleteActeur);

const app = new Application();
const port = 8000;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });

export default router;