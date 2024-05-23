import { Request,Response } from "express";
import { OrderServices } from "./order.service";
import { OrderSchema } from "./order.validation";

const createOrder = async (req: Request,res: Response) => {
    try {
        const orderData = req.body
        const zodParseData = OrderSchema.parse(orderData)
        const result = await OrderServices.createOrderIntoDB(zodParseData)

        res.status(200).json({
            success: true,
            "message": "Order created successfully!",
            data: result,
        });

    } catch (err: any) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while creating order',
            error: err,
        });
    }
}

const getOrder = async (req: Request,res: Response) => {
    try {
        const { email } = req.query as { email: string }

        const result = await OrderServices.gettingOrderFromDB(email)

        res.status(200).json({
            success: true,
            "message": !email ? "Orders fetched successfully!" : "Orders fetched successfully for user email!",
            data: result,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while getting order',
            error: err
        });
    }
}

export const orderControllers = { createOrder,getOrder }