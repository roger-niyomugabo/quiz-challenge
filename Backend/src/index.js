import express from 'express';
import dotenv from 'dotenv';
import db from './db';
import createServer from './app';

dotenv.config();

const app = express();

const port = parseInt(process.env.PORT) || 3000;

// eslint-disable-next-line no-unused-vars
let server;
(async () => {
  // Database sync. If 'force' set to 'true' the current database is erased and created again
  // If 'alter' set to 'true' the current database is updated with the new changes
  await db.sync({ alter: (process.env.NODE_ENV === 'development') }).then(async () => {
    console.log({ message: 'Quiz_challenge database sync done' });
  });

  createServer(app);
  server = app.listen(port, () => {
    console.log({ message: `Service listening on port ${port}` });
  });
})().catch(err => {
  console.log({ message: 'Error on service startup:', meta: { error: err } });
});
