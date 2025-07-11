export const IEncrytionServiceName = 'IEncrytionService';

export interface IEncrytionService {
  hash(password: string): Promise<string>;
  compare(password: string, hashed: string): Promise<boolean>;
}