/* eslint-disable camelcase */
import { Sequelize } from 'sequelize';
import { db_config } from '../config/db_config';

const config = db_config[process.env.NODE_ENV];

let db;
if (process.env.DB_URL) {
  console.log(process.env.DB_URL);
  db = new Sequelize(process.env.DB_URL);
}
db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  logging: false
});

db
  .authenticate()
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Database connection established successfully.');
    }
  })
  .catch((err) => {
    console.log({ message: 'Unable to connect to the database:', meta: { error: err } });
  });

export default db;
