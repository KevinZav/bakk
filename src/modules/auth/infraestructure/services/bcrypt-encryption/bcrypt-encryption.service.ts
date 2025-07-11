import { IEncrytionService } from '@modules/auth/domain/services/encryption/encryption.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptEncryptionService implements IEncrytionService {
  private readonly saltRounds = 10;

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }
}
