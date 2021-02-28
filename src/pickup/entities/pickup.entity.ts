import {Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, Column, JoinColumn, OneToOne, ManyToOne} from 'typeorm';
import {Warehouse} from '../../warehouse/entities/warehouse.entity'
import {Target} from '../../target/entities/target.entity'
@Entity()
export class Pickup {
    @PrimaryGeneratedColumn("uuid")
    private uuid: string;

    @Column()
    private weight: number;

    @Column({name: 'planned_date'})
    private plannedDate: Date;

    @CreateDateColumn()
    private created: Date;

    @Column({default: false})
    private deleted: boolean;

    @DeleteDateColumn({name: 'deleted_at'})
    private deletedAt: Date;

    @Column({default: "Lata de Aço"})
    private originType: string;

    @OneToOne(() => Warehouse)
    @JoinColumn()
    public warehouse: Warehouse;

    @ManyToOne(() => Target, target => target.pickups)
    public target: Target;

}
