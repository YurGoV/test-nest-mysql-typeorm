import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test-item.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }
}
