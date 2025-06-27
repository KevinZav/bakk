import { Inject, Injectable } from "@nestjs/common";
import { IExampleRepository, IExampleRepositoryName } from "../repositories/example.repository";
import { Example } from "../entities/example.entity";

@Injectable()
export class CreateExampleUseCase {
  constructor(@Inject(IExampleRepositoryName) private readonly repo: IExampleRepository) {}

  async execute(example: Example) {
    return this.repo.create(example);
  }
}