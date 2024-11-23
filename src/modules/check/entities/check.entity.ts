import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Issue } from '@modules/issue/entities/issue.entity';

@Entity()
export class Check {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public prompt: string;

  @Column()
  public summary: string;

  @OneToMany(() => Issue, (issue) => issue.check)
  public issues: Issue[];
}
