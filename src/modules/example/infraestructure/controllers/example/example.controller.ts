import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateExampleDto } from 'src/modules/example/domain/dtos/create-example.dto';
import { ExampleService } from 'src/modules/example/domain/services/example/example.service';

@Controller('example')
export class ExampleController {
  constructor(@Inject() private readonly exampleService: ExampleService) {}

  @Post()
  create(@Body() example: CreateExampleDto) {
    return this.exampleService.create(example);
  }
}
