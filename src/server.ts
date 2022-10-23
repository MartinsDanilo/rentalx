import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRouters } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRouters);

app.listen(3333, () => {
  console.log("server is running");
});
