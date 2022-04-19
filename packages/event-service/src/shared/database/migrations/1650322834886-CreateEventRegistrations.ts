import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEventRegistrations1650322834886
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'event_registrations',
        columns: [
          {
            name: 'user_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'event_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'checking', 'canceled'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('event_registrations');
  }
}
