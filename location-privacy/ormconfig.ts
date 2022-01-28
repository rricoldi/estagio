import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'http://localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'api',
  entities: ['dist/**/*.model{.ts,.js}', '**/*.model{.ts,.js}'],
  migrations: ['dist/src/migrations/*.js', 'src/migrations/*.{js,ts}'],
  migrationsTableName: 'migration',
  migrationsTransactionMode: 'each',
  cli: {
    migrationsDir: join(__dirname, 'src', 'migrations'),
  },
  synchronize: true,
  migrationsRun: true,
};

export default config;
