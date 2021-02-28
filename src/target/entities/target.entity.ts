import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, ManyToOne} from 'typeorm';
import {Pickup} from '../../pickup/entities/pickup.entity'
import {Company} from '../../company/entities/company.entity'
@Entity()
export class Target {
    @PrimaryGeneratedColumn()
    private id: number;
    
    @Column()
    private weight: number;

    @Column({name: 'start_date'})
    private startDate: Date;

    @Column({name: 'end_date'})
    private endDate: Date;

    @Column({default: false})
    private deleted: boolean;

    @CreateDateColumn()
    private created: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    private deletedAt: Date;

    @OneToMany(() => Pickup, pickup => pickup.target)
    public pickups: Pickup[];

    @ManyToOne(() => Company, company => company.targets)
    public company: Company;

}
