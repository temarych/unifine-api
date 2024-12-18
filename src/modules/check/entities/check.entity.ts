import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Issue } from '@modules/issue/entities/issue.entity';
import { User } from '@modules/user/entities/user.entity';
import { Match } from '@modules/match/entities/match.entity';

@Entity()
export class Check {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public prompt: string;

  @Column()
  public title: string;

  @Column()
  public summary: string;

  @Column({ nullable: true })
  public topic?: string;

  @Column({ nullable: true })
  public style?: string;

  @Column({ nullable: true })
  public excludedWords?: string;

  @Column({ nullable: true })
  public authorId: string;

  @Column('double precision')
  public aiScore: number;

  @Column({
    type: 'timestamptz',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @ManyToOne(() => User, (user) => user.checks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'authorId' })
  public author: User;

  @OneToMany(() => Issue, (issue) => issue.check, {
    cascade: true,
  })
  public issues: Issue[];

  @OneToMany(() => Match, (match) => match.check, {
    cascade: true,
  })
  public matches: Match[];
}
