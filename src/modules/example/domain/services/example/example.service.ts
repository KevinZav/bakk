import { Injectable } from '@nestjs/common';
import { Example } from '../../entities/example.entity';
import { CreateExampleUseCase } from '../../use-cases/create-example.usecase';

@Injectable()
export class ExampleService {
  constructor(private readonly createExampleUC: CreateExampleUseCase) {}

  async create(example: Example): Promise<Example> {
    return await this.createExampleUC.execute(example);
  }
}
