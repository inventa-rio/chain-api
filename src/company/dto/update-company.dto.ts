import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    
    cnpj: string;
   
    sellRate: number;
 
    name: string;
 
    
    companyName: string
}
