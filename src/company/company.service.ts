import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
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

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<UpdateResult> {
    return await this.companyRepository.update(id, updateCompanyDto);
  }

  async remove(id: number): Promise<UpdateResult> {
    return await this.companyRepository.softDelete(id);
  }
}
