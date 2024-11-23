import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService extends OpenAI {
  constructor(private readonly configService: ConfigService) {
    super({
      apiKey: configService.get<string>('OPENAI_API_KEY'),
    });
  }
}
