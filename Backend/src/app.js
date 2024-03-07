/* eslint-disable camelcase */
import express from 'express';
import cors from 'cors';

import quiz_resource from './routes/quiz_resource';
import quiz_detail from './routes/quiz_detail';

const createServer = (app) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // quiz routes
  app.use('/api/v1/quiz/:quizId', quiz_detail);
  app.use('/api/v1/quiz', quiz_resource);
};

export default createServer;
