import { Injectable } from '@nestjs/common';
import * as pdf from 'pdf-parse';

@Injectable()
export class PdfService {
  public async parse(buffer: Buffer): Promise<string> {
    const result = await pdf(buffer);
    return result.text;
  }
}
