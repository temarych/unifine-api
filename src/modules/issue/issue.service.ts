import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  public async create(data: DeepPartial<Issue>): Promise<Issue> {
    return await this.issueRepository.save(data);
  }

  public async createMany(data: DeepPartial<Issue>[]): Promise<Issue[]> {
    return await this.issueRepository.save(data);
  }

  public async findAll(): Promise<Issue[]> {
    return this.issueRepository.find();
  }

  public async findById(id: string): Promise<Issue | null> {
    return this.issueRepository.findOne({ where: { id } });
  }

  public async update(id: string, data: DeepPartial<Issue>): Promise<void> {
    await this.issueRepository.update(id, data);
  }

  public async delete(id: string): Promise<void> {
    await this.issueRepository.delete(id);
  }
}
