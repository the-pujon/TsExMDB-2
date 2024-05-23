import ProductModel from "../product/product.model";
import { TOrder } from "./order.interface";
import OrderModel from "./order.model";


const createOrderIntoDB = async (orderData: TOrder) => {
    const { productId,quantity } = orderData;

    const product = await ProductModel.findById(productId);

    if (!product) {
        throw new Error('Product not found');
    }

    if (quantity > product.inventory.quantity) {
        throw new Error('Insufficient quantity available in inventory');
    }


    const inventory = {
        quantity: product.inventory.quantity - quantity,
        inStock: (product.inventory.quantity - quantity) > 0
    }

    await ProductModel.findByIdAndUpdate(productId,{
        inventory
    });

    const result = await OrderModel.create(orderData);

    return result;
};

const gettingOrderFromDB = async (email: string) => {
    let result
    if (email) {

        result = await OrderModel.find({ email })

        if (!result) {
            throw new Error('Order not found')
        }

    }
    else {
        result = await OrderModel.find()
    }

    return result
}

export const OrderServices = { createOrderIntoDB,gettingOrderFromDB };
