import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEvent1650325900200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'event',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'location',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'date',
              type: 'timestamp'
            },
            {
              name: 'duration',
              type: 'int'
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('event');
    }

}
