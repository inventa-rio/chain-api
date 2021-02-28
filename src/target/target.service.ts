import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './entities/target.entity';

@Injectable()
export class TargetService {
constructor(
  @InjectRepository(Target) 
  private targetRepository: Repository<Target>
){}
  async create(createTargetDto: CreateTargetDto) {
    return await this.targetRepository.save(createTargetDto);
  }

  async findAll() {
    return await this.targetRepository.findAndCount();
  }

  async eagerFindAll() {
    return await this.targetRepository.findAndCount({relations: ['pickups', 'company']});
  }

  async findOne(id: number) {
    return await this.targetRepository.findOne(id);
  }

  async update(id: number, updateTargetDto: UpdateTargetDto) {
    return await this.targetRepository.update(id, updateTargetDto);
  }

  async remove(id: number) {
    return await this.targetRepository.softDelete(id);
  }
}
