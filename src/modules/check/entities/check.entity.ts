import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CheckResponse } from '../interfaces/response.interface';

@Entity()
export class Check {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public prompt: string;

  @Column('json')
  public response: CheckResponse;
}
