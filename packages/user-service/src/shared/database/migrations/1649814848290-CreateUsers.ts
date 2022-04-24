import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1649814848290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    enum UserRole {
      ADMIN = 'admin',
      USER = 'user',
    }

    await queryRunner.createTable(
      new Table({
        name: 'users',
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
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: [UserRole.USER, UserRole.ADMIN],
            default: `'${UserRole.USER}'`,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
