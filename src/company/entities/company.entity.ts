import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { Target } from '../../target/entities/target.entity';
@Unique(['cnpj'])
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private cnpj: string;

  @Column({type: "float"})
  private sellRate: number;

  @Column()
  private name: string;

  @Column()
  private companyName: string;

  @CreateDateColumn()
  private created: Date;

  @Column({ default: false })
  private deleted: boolean;

  @DeleteDateColumn({ name: 'deleted_at' })
  private deletedAt: Date;

  @OneToMany(
    () => Warehouse,
    warehouse => warehouse.company,
    { cascade: true },
  )
  public warehouses: Warehouse[];

  @OneToMany(
    () => Target,
    target => target.company,{cascade: true}
  )
  public targets: Target[];
}
