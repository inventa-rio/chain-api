import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

import {Warehouse} from "../../warehouse/entities/warehouse.entity"
@Unique(['cnpj'])
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private cnpj: string;

  @Column()
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
  
  @OneToMany(() => Warehouse, warehouse => warehouse.company)
  public warehouses: Warehouse[];
}
