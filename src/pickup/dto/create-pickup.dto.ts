import { ApiProperty } from '@nestjs/swagger';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
export class CreatePickupDto {
  @ApiProperty()
  weight: number;

  @ApiProperty()
  plannedDate: Date;

  @ApiProperty()
  originType: string;

  @ApiProperty()
  warehouse: Warehouse;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;
}
