import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, ManyToOne} from "typeorm";
import {Company} from "../../company/entities/company.entity"
@Entity()
export class Warehouse {
    
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private address: string;

    @CreateDateColumn()
    private create: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    private deletedAt: Date;

    @Column({default: false})
    private deleted: boolean;
    
    
    @ManyToOne(() => Company, company => company.warehouses)
    public company: Company

}
