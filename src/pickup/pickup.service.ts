import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePickupDto } from './dto/create-pickup.dto';
import { UpdatePickupDto } from './dto/update-pickup.dto';
import { Pickup } from './entities/pickup.entity';

@Injectable()
export class PickupService {
  constructor(
    @InjectRepository(Pickup)
    private pickupRepository: Repository<Pickup>,
  ) {}
  async create(createPickupDto: CreatePickupDto) {
    return await this.pickupRepository.save(createPickupDto);
  }

  async findAll() {
    return await this.pickupRepository.findAndCount();
  }
  

  async eagerFindAll(){
    return await this.pickupRepository.findAndCount({relations: ['warehouse', 'target']})
  }

  async findOne(id: number): Promise<Pickup> {
    return await this.pickupRepository.findOne(id) ;
  }

  async update(id: number, updatePickupDto: UpdatePickupDto): Promise<UpdateResult> {
    return await this.pickupRepository.update(id, updatePickupDto);
  }

  async remove(id: number): Promise<UpdateResult> {
    return await this.pickupRepository.softDelete(id);
  }
}
