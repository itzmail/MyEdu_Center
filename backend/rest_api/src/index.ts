import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { routes } from './routes';
import { logger } from './utils/logger';

const app: Application = express();
const port: number = 4000;

// Parser body request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors acces handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
})

routes(app);

app.listen(port, () => logger.info(`Server is running http://localhost:${port}`));