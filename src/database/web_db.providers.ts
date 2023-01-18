import { DataSource } from 'typeorm';

export const webDatabaseProviders = [
  {
    provide: 'WEB_DB',
    useFactory: async () => {
      const webDB = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'basic-db',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        // synchronize: true,
      });

      return webDB.initialize();
    },
  },
];