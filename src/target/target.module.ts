import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Pickup } from 'src/pickup/entities/pickup.entity';
import { Company } from 'src/company/entities/company.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Pickup, Company])],
  controllers: [TargetController],
  providers: [TargetService],
  exports: [TypeOrmModule],
})
export class TargetModule {}
