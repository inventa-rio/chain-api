import { Module } from '@nestjs/common';
import { PickupService } from './pickup.service';
import { PickupController } from './pickup.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Target } from 'src/target/entities/target.entity';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
import { Pickup } from './entities/pickup.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Target, Warehouse, Pickup])],
  controllers: [PickupController],
  providers: [PickupService],
  exports: [TypeOrmModule]
})
export class PickupModule {}
