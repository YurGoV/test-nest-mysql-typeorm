import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test-item.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  async create(testItem: CreateTestDto) {
    return await this.testRepository.save(testItem);
  }

  async findAll() {
    return await this.testRepository.find();
  }
}
