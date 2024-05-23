import { Request,Response } from "express";
import { ProductSchema } from "./product.validation";
import { productServices } from "./product.service";

const createProduct = async (req: Request,res: Response) => {

    try {
        const { product } = req.body

        const zodParseData = ProductSchema.parse(product)

        const result = await productServices.createProductIntoDB(zodParseData)

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

const getAllProducts = async (req: Request,res: Response) => {
    try {
        const result = await productServices.getAllProductsFromDB()
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while fetching product',
            error: err,
        });
    }
}

const getSingleProduct = async (req: Request,res: Response) => {
    try {
        const { productId } = req.params
        const result = await productServices.getSingleProductByIDFromDB(productId)
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while fetching product',
            error: err,
        });
    }
}

export const productControllers = { createProduct,getAllProducts,getSingleProduct }