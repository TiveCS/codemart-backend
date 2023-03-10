import dotenv from 'dotenv';
import express, { Express } from 'express';
import { router } from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
