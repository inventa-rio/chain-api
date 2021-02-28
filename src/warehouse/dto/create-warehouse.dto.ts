import { ApiProperty } from '@nestjs/swagger';
import { Company } from 'src/company/entities/company.entity';
export class CreateWarehouseDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  company: Company;
}
