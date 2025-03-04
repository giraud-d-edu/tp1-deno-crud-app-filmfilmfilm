import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import * as ActeurController from "./Acteur/controllers/acteur.controller.ts"

const router = new Router();

router.get('/acteurs', ActeurController.getAllActeurs)
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