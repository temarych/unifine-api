import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { OpenaiService } from '@modules/openai/openai.service';
import { IssueService } from '@modules/issue/issue.service';
import { PdfService } from '@modules/pdf/pdf.service';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { ApiError } from '@modules/error/api-error.entity';
import { SaplingService } from '@modules/sapling/sapling.service';
import { Check } from './entities/check.entity';
import {
  CheckGrammarPromptOptions,
  getCheckGrammarPrompt,
} from './prompts/check-grammar.prompt';
import { CreateCheckOptions } from './check.service.types';
import { normalize } from './helpers/normalize';
import { getTextPositions } from './helpers/getTextPositions';

@Injectable()
export class CheckService {
  constructor(
    private readonly openaiService: OpenaiService,
    private readonly issueService: IssueService,
    private readonly pdfService: PdfService,
    private readonly saplingService: SaplingService,
    @InjectRepository(Check)
    private readonly checkRepository: Repository<Check>,
  ) {}

  public async create(options: CreateCheckOptions): Promise<Check> {
    const text = options.file
      ? await this.pdfService.parse(options.file.buffer)
      : options.prompt;

    if (!text) throw new ApiError(ApiErrorCode.NoPromptSpecified);

    const prompt = normalize(text);

    const aiCheckResult = await this.saplingService.checkForAI(prompt);
    const result = await this.generate(prompt as string, options);
    const issues = await this.issueService.createMany(result.issues);
    const aiScore = aiCheckResult.score * 100;

    const check = await this.checkRepository.save({
      ...options,
      ...result,
      prompt,
      issues,
      aiScore,
    });

    return check;
  }

  public async generate(
    prompt: string,
    options: CheckGrammarPromptOptions,
  ): Promise<Check> {
    const result = await this.openaiService.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: getCheckGrammarPrompt(options) },
        { role: 'user', content: prompt as string },
      ],
    });

    const content = result.choices[0].message.content as string;
    const response = JSON.parse(content) as Check;

    const issues = response.issues.map((issue) => {
      const positions = getTextPositions(prompt, issue.text);
      return { ...issue, start: positions?.start, end: positions?.end };
    });

    return { ...response, issues };
  }

  public async findAll(): Promise<Check[]> {
    return this.checkRepository.find();
  }

  public async findAllByAuthorId(authorId: string): Promise<Check[]> {
    return this.checkRepository.find({
      where: { authorId },
    });
  }

  public async findById(id: string): Promise<Check | null> {
    return this.checkRepository.findOne({
      where: { id },
      relations: { issues: true },
    });
  }

  public async update(id: string, data: DeepPartial<Check>): Promise<void> {
    await this.checkRepository.update(id, data);
  }

  public async delete(id: string): Promise<void> {
    await this.checkRepository.delete(id);
  }
}
