import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Check } from '@modules/check/entities/check.entity';
import { IssueType } from '../enums/issue-type.enum';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public type: IssueType;

  @Column()
  public text: string;

  @Column()
  public message: string;

  @Column()
  public suggestion: string;

  @Column()
  public startIndex: number;

  @Column()
  public endIndex: number;

  @ManyToOne(() => Check, (check) => check.issues, {
    onDelete: 'CASCADE',
  })
  public check: Check;
}
