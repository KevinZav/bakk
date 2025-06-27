import { Module } from '@nestjs/common';
import { ExampleService } from './domain/services/example/example.service';
import { ExampleController } from './infraestructure/controllers/example/example.controller';
import { CreateExampleUseCase } from './domain/use-cases/create-example.usecase';
import { IExampleRepositoryName } from './domain/repositories/example.repository';
import { ExampleMemoryRepository } from './infraestructure/repositories/example-memory.repository';

@Module({
  providers: [
    ExampleService,
    CreateExampleUseCase,
    {
      provide: IExampleRepositoryName,
      useClass: ExampleMemoryRepository
    }
  ],
  controllers: [ExampleController]
})
export class ExampleModule {}
