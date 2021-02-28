import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, OneToMany} from "typeorm";
import {Company} from "../../company/entities/company.entity"
import {Pickup} from "../../pickup/entities/pickup.entity"
@Entity()
export class Warehouse {
    
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private address: string;

    @CreateDateColumn()
    private created: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    private deletedAt: Date;

    @Column({default: false})
    private deleted: boolean;
    
    
    @ManyToOne(() => Company, company => company.warehouses)
    public company: Company

    @OneToMany(()=> Pickup, pickup => pickup.warehouse, {cascade: true})
    public pickups: Pickup[];

}
