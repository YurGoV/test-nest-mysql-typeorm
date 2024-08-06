import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Test } from './src/test/entities/test.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: configService.getOrThrow('DB_PORT'),
  database: configService.getOrThrow('DB_NAME'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  migrations: ['migrations/**'],
  entities: [Test],
});
