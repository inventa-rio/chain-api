import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './entities/warehouse.entity';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
  ) {}
  async create(createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseRepository.save(createWarehouseDto);
  }

  async findAll() {
    return await this.warehouseRepository.findAndCount();
  }

  async eagerFindAll() {
    return await this.warehouseRepository.findAndCount({
      relations: ['company', 'pickups']
    });
  }

  findOne(id: number): Promise<Warehouse> {
    return this.warehouseRepository.findOne(id, { relations: ['company'] });
  }

  update(
    id: number,
    updateWarehouseDto: UpdateWarehouseDto,
  ): Promise<UpdateResult> {
    return this.warehouseRepository.update(id, updateWarehouseDto);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.warehouseRepository.softDelete(id);
  }
}
