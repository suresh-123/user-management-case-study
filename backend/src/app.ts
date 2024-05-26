import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from '@middlewares/errorHandler.middleware';
import notFoundHandler from '@middlewares/notFound.middleware';
import Database from '@config/database';
import rootRouter from '@src/rootRouter';

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`; 
const envPath = path.resolve(__dirname, '..', envFile);
dotenv.config({ path: envPath });

const app: Express = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: '10mb',
    extended: true,
    parameterLimit: 50000,
  })
);

/**
 * Initialize Database Connection
 */
Database.connect();

app.use(cors());
app.use(helmet());
app.use('/api/v1', rootRouter);
app.use(errorHandler);
app.use(notFoundHandler);

export default app;
