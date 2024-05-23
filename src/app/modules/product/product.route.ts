import express from 'express';
import { productControllers } from './product.controller';
const router = express.Router()

router.post('/',productControllers.createProduct)
router.get('/',productControllers.getAllProducts)
router.get('/:productId',productControllers.getSingleProduct)
router.delete('/:productId',productControllers.deleteProduct)
router.put('/:productId',productControllers.updateProduct)

export const ProductRoute = router
