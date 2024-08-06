import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialData1722960484416 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO test (record) VALUES ('initial record');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM test WHERE record = 'initial record';
        `);
  }
}
