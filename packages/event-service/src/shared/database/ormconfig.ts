import { DataSource } from 'typeorm';

import NamingStrategy from './NamingStrategy';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'eventmanager-eventservice',
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/shared/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
  namingStrategy: new NamingStrategy(),
});

export const initializeDataSource = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch(err => {
      console.error('Error during Data Source initialization:', err);
    });
};

export default AppDataSource;
