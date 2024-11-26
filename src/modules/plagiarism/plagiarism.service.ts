import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { matchPrint } from './plagiarism.utils.js';

@Injectable()
export class PlagiarismService {
  constructor(private readonly configService: ConfigService) {}

  public async getMatches(text: string) {
    const googleApiKey = this.configService.get<string>(
      'GOOGLE_API_KEY',
    ) as string;

    const googleEngineId = this.configService.get<string>(
      'GOOGLE_ENGINE_ID',
    ) as string;

    const result = await matchPrint({
      text,
      apikey: googleApiKey,
      engineid: googleEngineId,
    });

    return result.flatMap((source) => source.matches);
  }
}
