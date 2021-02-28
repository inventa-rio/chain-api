import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Pickup } from 'src/pickup/entities/pickup.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Company, Pickup])],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports:[TypeOrmModule]
})
export class WarehouseModule {}
