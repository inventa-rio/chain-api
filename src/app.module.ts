import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickupModule } from './pickup/pickup.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { CompanyModule } from './company/company.module';
import { TargetModule } from './target/target.module';
import {Company} from './company/entities/company.entity';
import {Warehouse} from './warehouse/entities/warehouse.entity'
import {Pickup} from './pickup/entities/pickup.entity';
import {Target} from './target/entities/target.entity'
import { CompanyController } from './company/company.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { TargetController } from './target/target.controller';
import { PickupController } from './pickup/pickup.controller';
import { CompanyService } from './company/company.service';
import { TargetService } from './target/target.service';
import { PickupService } from './pickup/pickup.service';
import {WarehouseService} from './warehouse/warehouse.service'

@Module({ // Well, database credentials shouldn't be open on github, but thats life
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://thaqshvxmljyjn:8cf7643ea8a98ebb62694b99b654027f03eab19561b9caad5ff634131d9a1857@ec2-54-78-36-245.eu-west-1.compute.amazonaws.com:5432/daesm6pn1r120b',
      entities: [Company, Warehouse, Pickup, Target],
      synchronize: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }),
    PickupModule,
    WarehouseModule,
    CompanyModule,
    TargetModule,
  ],
  controllers: [AppController, CompanyController, WarehouseController,TargetController, PickupController],
  providers: [AppService, CompanyService, WarehouseService, TargetService, PickupService],
})
export class AppModule {}
