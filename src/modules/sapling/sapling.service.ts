import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { AiDetectResponse } from './sapling.service.types';

@Injectable()
export class SaplingService {
  private axios: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    this.axios = axios.create({
      baseURL: this.configService.get('SAPLING_API_URL'),
    });
  }

  public async checkForAI(text: string): Promise<AiDetectResponse> {
    const apiKey = this.configService.get('SAPLING_API_KEY');

    const response = await this.axios.post('/aidetect', {
      text,
      key: apiKey,
      sent_scores: false,
    });

    return response.data;
  }
}
