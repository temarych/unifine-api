import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { OpenaiService } from '@modules/openai/openai.service';
import { Check } from './entities/check.entity';
import { getCheckGrammarPrompt } from './prompts/check-grammar.prompt';
import { CheckResponse } from './interfaces/response.interface';

@Injectable()
export class CheckService {
  constructor(
    private readonly openaiService: OpenaiService,
    @InjectRepository(Check)
    private readonly checkRepository: Repository<Check>,
  ) {}

  public async create(data: DeepPartial<Check>): Promise<Check> {
    const result = await this.openaiService.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: getCheckGrammarPrompt() },
        { role: 'user', content: data.prompt as string },
      ],
    });

    const content = result.choices[0].message.content as string;
    const response = JSON.parse(content) as CheckResponse;

    const check = await this.checkRepository.save({ ...data, response });

    return check;
  }

  public async findAll(): Promise<Check[]> {
    return this.checkRepository.find();
  }

  public async findById(id: string): Promise<Check | null> {
    return this.checkRepository.findOne({ where: { id } });
  }

  public async update(id: string, data: DeepPartial<Check>): Promise<void> {
    await this.checkRepository.update(id, data);
  }

  public async delete(id: string): Promise<void> {
    await this.checkRepository.delete(id);
  }
}
