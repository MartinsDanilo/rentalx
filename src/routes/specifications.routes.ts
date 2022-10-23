import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationServices } from "../modules/cars/services/CreateSpecificationService";

const specificationRouters = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationServices = new CreateSpecificationServices(
    specificationsRepository
  );

  createSpecificationServices.execute({ name, description });

  return response.status(200).send();
});

export { specificationRouters };
