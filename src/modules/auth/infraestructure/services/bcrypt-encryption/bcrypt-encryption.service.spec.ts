import { Test, TestingModule } from '@nestjs/testing';
import { BcryptEncryptionService } from './bcrypt-encryption.service';

describe('BcryptEncryptionService', () => {
  let service: BcryptEncryptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptEncryptionService],
    }).compile();

    service = module.get<BcryptEncryptionService>(BcryptEncryptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
