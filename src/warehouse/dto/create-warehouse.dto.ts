import { ApiProperty } from '@nestjs/swagger';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { Company } from 'src/company/entities/company.entity';
import { CreatePickupDto } from 'src/pickup/dto/create-pickup.dto';
import { Pickup } from 'src/pickup/entities/pickup.entity';
export class CreateWarehouseDto {
  @ApiProperty()
  address: string;

  @ApiProperty({type: [CreateCompanyDto]})
  company: Company;

  @ApiProperty({type: [CreatePickupDto]})
  pickups: Pickup[];
}
