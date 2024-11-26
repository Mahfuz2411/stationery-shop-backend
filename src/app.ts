import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import productRouter from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', productRouter);


app.get('/', (req: Request, res: Response) => {
  return res.json({mssg: "Hello, world!"});
});

export default app;
