import { Example } from "../entities/example.entity";

export const IExampleRepositoryName = 'IExampleRepository';

export interface IExampleRepository {
  create(example: Example): Promise<Example>;
  getAll(): Promise<Example[]>;
}

