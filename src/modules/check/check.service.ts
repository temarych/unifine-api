import { Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { OpenaiService } from '@modules/openai/openai.service';
import { Check } from './entities/check.entity';
import { getCheckGrammarPrompt } from './prompts/check-grammar.prompt';

@Injectable()
export class CheckService {
  constructor(private readonly openaiService: OpenaiService) {}

  public async create(data: DeepPartial<Check>): Promise<Check> {
    const check = new Check();

    const result = await this.openaiService.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: getCheckGrammarPrompt() },
        { role: 'user', content: data.prompt as string },
      ],
    });

    const response = result.choices[0].message.content;

    Object.assign(check, { ...data, response });

    return check;
  }
}
