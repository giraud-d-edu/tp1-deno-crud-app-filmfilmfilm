import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const router = new Router();

const app = new Application();
const port = 8000;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });

export default router;