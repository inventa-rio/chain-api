import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Pickup } from 'src/pickup/entities/pickup.entity';
import { Warehouse } from './entities/warehouse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Company, Pickup, Warehouse])],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports:[TypeOrmModule]
})
export class WarehouseModule {}
