import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Check } from '@modules/check/entities/check.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public url: string;

  @Column()
  public score: number;

  @ManyToOne(() => Check, (check) => check.matches, {
    onDelete: 'CASCADE',
  })
  public check: Check;
}
