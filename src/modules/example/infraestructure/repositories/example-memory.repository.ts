import { Injectable } from "@nestjs/common";
import { Example } from "../../domain/entities/example.entity";
import { IExampleRepository } from "../../domain/repositories/example.repository";

@Injectable()
export class ExampleMemoryRepository implements IExampleRepository{
  private examples: Example[] = [];

  async create(example: Example): Promise<Example> {
    this.examples.push(example);

    return example;
  }
  getAll(): Promise<Example[]> {
    throw new Error("Method not implemented.");
  }
}