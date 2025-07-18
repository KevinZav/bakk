import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleInit() {
    this.$connect;
  }

  async onModuleDestroy() {
    this.$disconnect;
  }
}
