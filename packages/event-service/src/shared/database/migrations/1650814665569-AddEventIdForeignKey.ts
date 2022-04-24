import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AddEventIdForeignKey1650814665569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey(
        'event_registrations',
        new TableForeignKey({
          name: 'EventRegistrationEvent',
          columnNames: ['event_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'events',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('event_registrations', 'EventRegistrationEvent');
    }

}
