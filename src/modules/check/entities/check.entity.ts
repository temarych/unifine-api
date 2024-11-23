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

@Entity()
export class Check {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public prompt: string;

  @Column()
  public summary: string;

  @Column({ nullable: true })
  public authorId: string;

  @ManyToOne(() => User, (user) => user.checks)
  @JoinColumn({ name: 'authorId' })
  public author: User;

  @OneToMany(() => Issue, (issue) => issue.check, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  public issues: Issue[];
}
