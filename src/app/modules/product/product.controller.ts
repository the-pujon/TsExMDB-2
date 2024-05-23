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
    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while creating product',
            error: err,
        });
    }
}

const getAllProducts = async (req: Request,res: Response) => {
    try {
        const { searchTerm } = req.query as { searchTerm: string }
        const result = await productServices.getAllProductsFromDB(searchTerm)
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });

    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (err: any) {
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
    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while fetching product',
            error: err,
        });
    }
}

const deleteProduct = async (req: Request,res: Response) => {
    try {
        const { productId } = req.params

        await productServices.deleteProductFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });

    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while deleting product',
            error: err,
        });
    }
}

const updateProduct = async (req: Request,res: Response) => {
    try {

        const { productId } = req.params
        const product = req.body

        const result = await productServices.updateProductInDB(productId,product)

        res.status(200).json({
            success: true,
            "message": "Product updated successfully!",
            data: result,
        });

    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong while updating product',
            error: err,
        });
    }
}

export const productControllers = { createProduct,getAllProducts,getSingleProduct,deleteProduct,updateProduct }