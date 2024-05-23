import cors from 'cors';
import express,{ Application,Request,Response } from 'express';
import { ProductRoute } from './app/modules/product/product.route';
import { OrderRoute } from './app/modules/orders/order.route';


const app: Application = express();

app.use(express.json());
app.use(cors());


app.use('/api/products',ProductRoute)
app.use('/api/orders',OrderRoute)

app.get("/",(req: Request,res: Response) => {
    res.status(200).send({
        success: true,
        "message": "Welcome to Express Typescript MongoDB Mongoose assignment - ExTsMDB",
    });
})

app.all("*",(req: Request,res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});


export default app;
