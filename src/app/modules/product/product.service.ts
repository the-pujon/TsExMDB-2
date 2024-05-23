import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
    const result = await ProductModel.create(productData);

    return result;
}

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result
}

const getSingleProductByIDFromDB = async (id: string) => {
    const result = await ProductModel.findById(id)
    return result
}

const deleteProductFromDB = async (id: string) => {
    await ProductModel.findByIdAndDelete({ _id: id })
}

const updateProductInDB = async (productId: string,productData: TProduct) => {
    const result = await ProductModel.findByIdAndUpdate(productId,productData,{ new: true });

    return result

}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductByIDFromDB,
    deleteProductFromDB,
    updateProductInDB
}