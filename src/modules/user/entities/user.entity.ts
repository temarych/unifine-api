import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Check } from '@modules/check/entities/check.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @OneToMany(() => Check, (check) => check.author, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  public checks: Check[];
}
