import cors from 'cors';
import express,{ Application } from 'express';
import { ProductRoute } from './app/modules/product/product.route';


const app: Application = express();

app.use(express.json());
app.use(cors());


app.use('/api/products',ProductRoute)


export default app;
