import { Specification } from "../model/Specificaion";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];
  constructor() {
    this.specification = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }
  findByName(name: string): Specification {
    const specification = this.specification.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
