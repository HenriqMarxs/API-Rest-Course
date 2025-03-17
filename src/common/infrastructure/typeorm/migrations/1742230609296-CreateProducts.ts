import { table } from "console";
import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1742230609296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('create extension if not exists "uuid-ossp"')
      await queryRunner.createTable(
        new Table({ 
          name:'products',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name:'price',
              type: 'decimal',
              precision: 10,
              scale: 2,
            },
            {
              name: 'quanity',
              type: 'int',
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'current_timestamp',
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'current_timestamp',

            },
           

          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products')
    }

}
