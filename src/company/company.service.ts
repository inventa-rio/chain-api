import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ){}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company>{
    return await this.companyRepository.save(createCompanyDto);
  }

  async findAll() {
    return await this.companyRepository.findAndCount();
  }

  async eagerFindAll(){
    return await this.companyRepository.findAndCount({relations: ['warehouses', 'targets']})
  }

  async findOne(id: number) {
    return await this.companyRepository.findOne(id, {relations: ['warehouses', 'targets']});
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
