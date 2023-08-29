import 'dotenv';
import { Options } from 'sequelize';

const { dbUser, dbPass, dbName, dbHost } = process.env;


 const config: Options = {
  dialect: "postgres",
  username: "postgres",
  password: 'postgres',
  database: "database_development",
  host: "localhost",
};
export = config

