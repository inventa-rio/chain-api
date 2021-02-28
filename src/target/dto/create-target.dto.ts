import { ApiProperty } from '@nestjs/swagger';
import { Company } from 'src/company/entities/company.entity';
import { CreatePickupDto } from 'src/pickup/dto/create-pickup.dto';
import { Pickup } from 'src/pickup/entities/pickup.entity';
export class CreateTargetDto {
  @ApiProperty()
  weight: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  private endDate: Date;

  @ApiProperty({ type: [CreatePickupDto] })
  pickups: Pickup[];

  @ApiProperty()
  company: Company;
}
