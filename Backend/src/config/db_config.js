/* eslint-disable camelcase */
import dotenv from 'dotenv';
dotenv.config();
// Config for the DB and the Sequelize CLI
const db_config = {
  development: {
    username: process.env.QUIZ_CHALLENGE_DB_USER || 'postgres',
    password: process.env.QUIZ_CHALLENGE_DB_PASSWORD || 'postgres',
    database: process.env.QUIZ_CHALLENGE_DB_NAME || 'quiz_challenge',
    host: process.env.QUIZ_CHALLENGE_DB_HOST || 'localhost',
    port: parseInt(process.env.QUIZ_CHALLENGE_DB_PORT || '5432'),
    dialect: 'postgres'
  },
  test: {
    username: 'quiz_challenge_user',
    password: 'quiz_challenge_pass',
    database: 'quiz_challenge_database',
    host: 'quiz_challenge_db',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    username: process.env.QUIZ_CHALLENGE_DB_USER,
    password: process.env.QUIZ_CHALLENGE_DB_PASSWORD,
    database: process.env.QUIZ_CHALLENGE_DB_NAME,
    host: process.env.QUIZ_CHALLENGE_DB_HOST,
    port: parseInt(process.env.QUIZ_CHALLENGE_DB_PORT),
    dialect: 'postgres'
  }
};

export { db_config };
