import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Result } from '@typings/result';

@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}

  public sign<T extends object>(payload: T): string {
    const secret = this.configService.get<string>('JWT_SECRET') as string;
    const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');
    return jwt.sign(payload, secret, { expiresIn });
  }

  public verify<T extends object>(token: string): Result<T, Error> {
    try {
      const secret = this.configService.get<string>('JWT_SECRET') as string;
      const payload = jwt.verify(token, secret) as T;
      return { error: null, result: payload };
    } catch (error) {
      return { error: error as Error, result: null };
    }
  }
}
