import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationServices {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlReadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlReadyExists) {
      throw new Error("Category already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationServices };
