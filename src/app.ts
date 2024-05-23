import cors from 'cors';
import express,{ Application } from 'express';
import { ProductRoute } from './app/modules/product/product.route';
import { OrderRoute } from './app/modules/orders/order.route';


const app: Application = express();

app.use(express.json());
app.use(cors());


app.use('/api/products',ProductRoute)
app.use('/api/orders',OrderRoute)


export default app;
