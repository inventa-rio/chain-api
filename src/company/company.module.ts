import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from 'src/target/entities/target.entity';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Target, Warehouse])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [TypeOrmModule]
})
export class CompanyModule {}
