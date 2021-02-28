import {Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, Column, JoinColumn, OneToOne, ManyToOne} from 'typeorm';
import {Warehouse} from '../../warehouse/entities/warehouse.entity'
import {Target} from '../../target/entities/target.entity'
import {v4 as uuid} from 'uuid';
@Entity()
export class Pickup {
    @PrimaryGeneratedColumn()
    private id: number; 

    @Column({default: uuid() })
    public uuid: string;

    @Column()
    private weight: number;

    @Column({name: 'planned_date'})
    private plannedDate: Date;
    
    @Column({type: "float"})
    private latitude: number;
    
    @Column({type: "float"})
    private longitude: number;


    @CreateDateColumn()
    private created: Date;

    @Column({default: false})
    private deleted: boolean;

    @DeleteDateColumn({name: 'deleted_at'})
    private deletedAt: Date;

    @Column({default: "Lata de Aço"})
    private originType: string;

    @ManyToOne(() => Warehouse, warehouse => warehouse.pickups)
    public warehouse: Warehouse;

    @ManyToOne(() => Target, target => target.pickups, {cascade: true})
    public target: Target;

}
