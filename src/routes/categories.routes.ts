import { Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, desciption } = request.body;

  categories.push({
    name,
    desciption,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
