import { Module } from '@nestjs/common';
import { PickupService } from './pickup.service';
import { PickupController } from './pickup.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Target } from 'src/target/entities/target.entity';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Target, Warehouse])],
  controllers: [PickupController],
  providers: [PickupService]
  exports: [TypeOrmModule]
})
export class PickupModule {}
