import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { authRoutes } from "./routes/auth";
import { productRoutes } from "./routes/products";
import { reviewRoutes } from "./routes/reviews";

const app = new Elysia()
  .use(swagger())
  .use(authRoutes)
  .use(productRoutes)
  .use(reviewRoutes)
  .listen(3000);

console.log(
  `Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
