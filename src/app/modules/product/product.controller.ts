import { Request,Response } from "express";
import { ProductSchema } from "./product.validation";
import { productServices } from "./product.service";

const createProduct = async (req: Request,res: Response) => {

    try {
        const { product } = req.body
        console.log("product",product)

        const zodParseData = ProductSchema.parse(product)
        console.log('zodParseData',zodParseData)

        const result = await productServices.createProductIntoDB(zodParseData)
        console.log('result',result)

        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while creating product',
            error: err,
        });
    }
}

export const productControllers = { createProduct }