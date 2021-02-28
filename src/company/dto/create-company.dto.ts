import {ApiProperty} from '@nestjs/swagger'
import { CreateTargetDto } from 'src/target/dto/create-target.dto';
import { Target } from 'src/target/entities/target.entity';
import { CreateWarehouseDto } from 'src/warehouse/dto/create-warehouse.dto';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
export class CreateCompanyDto {
   @ApiProperty()
   cnpj: string;
   
   @ApiProperty()
   sellRate: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   companyName: string; //this is equivalent to razão social, something like "my company LTDA"

   @ApiProperty({type: [CreateWarehouseDto]})
   warehouses: Warehouse[];

   @ApiProperty({type: [CreateTargetDto]})
   targets: Target[];
}
